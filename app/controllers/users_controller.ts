import NotFoundException from '#exceptions/not_found_exception'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { customResponse } from '../../utils/helpers.js'
import { basicIdParamValidator } from '#validators/index'
import { userStatusValidator, userUpdateDetailValidator } from '#validators/user'
import UploadService from '#services/upload_service'

export default class UsersController {
  // HANDLE GET USER
  async getAuthenticatedUser({ auth, response }: HttpContext) {
    const user = await User.query()
      .where('id', auth.user!.id)
      .preload('followers')
      .preload('following')
      .preload('genre')
      .first()
    if (!user) throw new NotFoundException("Can't find user")
    return response.status(200).send(customResponse('User details!', user))
  }

  // HANDLE GET USER DETAILS
  async getOneUser({ response, params }: HttpContext) {
    const param = await basicIdParamValidator.validate(params)
    const user = await User.query()
      .where('id', param.id)
      .preload('followers')
      .preload('following')
      .preload('genre')
      .first()
    if (!user) throw new NotFoundException("Can't find user")
    return response.status(200).send(customResponse('User details!', user))
  }

  // HANDLE UPDATE USER INFO
  async updateUserDetails({ request, params, response }: HttpContext) {
    const param = await basicIdParamValidator.validate(params)
    const payload = await userUpdateDetailValidator.validate(request.body())

    // CHECK IF USER EXISTS
    const user = await User.query()
      .where('id', param.id)
      .preload('followers')
      .preload('following')
      .preload('genre')
      .first()
    if (!user) throw new NotFoundException("Can't find user")

    // UPDATE USER'S DATA
    user.merge(payload)
    await user.save()
    await user.refresh()

    return response.status(200).send(customResponse('Profile updated', user))
  }

  // HANDLE UPDATE USER INFO
  async updateUserUploads({ request, params, response }: HttpContext) {
    const param = await basicIdParamValidator.validate(params)

    // UPLOAD FILES IF EXISTS
    const profileImage = await UploadService.upload(request.file('profileImage'))
    const coverImage = await UploadService.upload(request.file('coverImage'))

    // CHECK IF USER EXISTS
    const user = await User.query()
      .where('id', param.id)
      .preload('followers')
      .preload('following')
      .preload('genre')
      .first()
    if (!user) throw new NotFoundException("Can't find user")

    // CHECK IF FILE EXIST
    if (profileImage && user.profileImage) {
      UploadService.deleteFile(user.profileImage)
    }

    if (coverImage && user.coverImage) {
      UploadService.deleteFile(user.coverImage)
    }

    // UPDATE USER'S DATA
    user.merge({
      profileImage,
      coverImage,
    })
    await user.save()
    await user.refresh()

    return response.status(200).send(customResponse('Profile updated', user))
  }

  // HANDLE UPDATE USER ACTIVE INFO
  async updateUserStatus({ request, params, response }: HttpContext) {
    const param = await basicIdParamValidator.validate(params)
    const payload = await userStatusValidator.validate(request.body())

    // CHECK IF USER EXISTS
    const user = await User.query()
      .where('id', param.id)
      .preload('followers')
      .preload('following')
      .preload('genre')
      .first()
    if (!user) throw new NotFoundException("Can't find user")

    // UPDATE USER'S DATA
    user.isActive = payload.status
    await user.save()
    await user.refresh()

    return response.status(200).send(customResponse('Profile updated', user))
  }

  // HANDLE GET ALL USERS
  async getAllUsers({ request, response }: HttpContext) {
    const { page = 1, per_page: perPage = 10 } = request.qs()
    const users = await User.query().paginate(page, perPage)
    return response.status(200).send(customResponse('All users', users))
  }
}
