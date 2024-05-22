import PusherService from '#services/pusher_service'
import { ContentTypes } from '#enums/content'
import NotFoundException from '#exceptions/not_found_exception'
import UnAuthorizedException from '#exceptions/un_authorized_exception'
import Content from '#models/content'
import Transaction from '#models/transaction'
import ContentPolicy from '#policies/content_policy'
import LocationService from '#services/location_service'
import { createContentValidator, updateContentValidator } from '#validators/content'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { customResponse } from '../../utils/helpers.js'
import UploadService from '#services/upload_service'

inject()
export default class ContentsController {
  constructor(protected pusherService: PusherService) {}

  async createContent({ request, response, bouncer, auth }: HttpContext) {
    const locationData = await LocationService.getUserLocationByIpAddress(request.ip())
    const payload = await request.validateUsing(createContentValidator)
    const country = payload.country || auth.user?.country || locationData?.country || 'nigeria'

    const { displayCut, coverImage, content, ...rest } = payload

    // CHECK IF USER HAS PAID
    const transaction = await Transaction.find(payload.transactionId)
    if (!transaction) throw new NotFoundException('Stake payment transaction not found')

    if (await bouncer.with(ContentPolicy).denies('create'))
      throw new UnAuthorizedException("Unauthorized: Can't create content")

    // UPLOAD FILES
    const displayCutUrl = await UploadService.upload(request.file('displayCut'), 'display_cut')
    const coverImageUrl = await UploadService.upload(request.file('coverImage'), 'content')
    const contentUrl = await UploadService.upload(request.file('content'), 'artwork')

    // NOTIFY THE ADMIN
    this.pusherService.sendAdminPushNotification(
      'Content Upload',
      `${auth.user?.musicName || auth.user?.username} just uploaded a new content titled ${payload.title}`
    )

    const newContent = await Content.create({
      country,
      title: rest.title,
      features: rest.features?.split(','),
      type: rest.type as ContentTypes,
      genreId: rest.genreId,
      transactionId: rest.transactionId,
      price: rest.price,
      userId: auth.user?.id,
      isActive: true,
      displayCutUrl,
      contentUrl,
      coverImage: coverImageUrl,
    })

    await newContent.load('genre')
    await newContent.load('user')
    await newContent.load('transaction')
    await newContent.refresh()

    response.status(201).send(customResponse('Content created!', newContent))
  }

  async fetchContents({ request, response }: HttpContext) {
    const { page = 1, per_page: perPage = 10 } = request.qs()

    const contents = await Content.query()
      .where('is_active', true)
      .andWhere('is_deleted', false)
      .paginate(page, perPage)

    response.status(200).send(customResponse('All contents', contents))
  }

  async fetchDeletedContents({ request, response }: HttpContext) {
    const { page = 1, per_page: perPage = 10 } = request.qs()
    const contents = await Content.query().where('is_deleted', true).paginate(page, perPage)
    response.status(200).send(customResponse('All contents', contents))
  }

  async fetchDeactivatedContents({ request, response }: HttpContext) {
    const { page = 1, per_page: perPage = 10 } = request.qs()
    const contents = await Content.query().where('is_active', false).paginate(page, perPage)
    response.status(200).send(customResponse('All contents', contents))
  }

  async fetchAllContents({ request, response }: HttpContext) {
    const { page = 1, per_page: perPage = 10 } = request.qs()
    const contents = await Content.query().paginate(page, perPage)
    response.status(200).send(customResponse('All contents', contents))
  }

  async updateContent({ request, response, bouncer }: HttpContext) {
    const payload = await request.validateUsing(updateContentValidator)

    // CHECK IF CONTENT EXISTS
    const content = await Content.find(payload.params.id)
    if (!content) throw new NotFoundException('Content not found')

    // CHECK AUTHORIZATION
    if (await bouncer.with(ContentPolicy).denies('update', content))
      throw new UnAuthorizedException("Unauthorized: Can't update content")

    // UPDATE CONTENT
    content.price = payload.price
    await content.save()

    await content.refresh()
    await content.load('genre')
    await content.load('transaction')
    await content.load('user')

    return response.status(200).send(customResponse('Content updated!', content))
  }

  async deleteContent({ request, response, bouncer, auth }: HttpContext) {
    const payload = await request.validateUsing(updateContentValidator)

    // CHECK IF CONTENT EXISTS
    const content = await Content.find(payload.params.id)
    if (!content) throw new NotFoundException('Content not found')

    // CHECK AUTHORIZATION
    if (await bouncer.with(ContentPolicy).denies('delete', content))
      throw new UnAuthorizedException("Unauthorized: Can't delete content")

    // SOME CHECKS ON VERIFICATION OF CONTENT

    // UPDATE CONTENT DELETED STATUS
    content.isDeleted = true
    await content.save()

    // UPDATE ADMIN
    this.pusherService.sendAdminPushNotification(
      'Content Deletion',
      `${auth.user?.musicName || auth.user?.username} deleted a content ${content.title}`
    )

    return response.status(200).send(customResponse('Content deleted!', content))
  }
}
