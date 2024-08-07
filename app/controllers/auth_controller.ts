import NotFoundException from '#exceptions/not_found_exception'
import UnAuthorizedException from '#exceptions/un_authorized_exception'
import User from '#models/user'
import PiService from '../services/pi_service.js'
import { authorizeAdminValidator, authorizeUserValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { customResponse } from '../../utils/helpers.js'
import { UserRole } from '#enums/user'
import BadRequestException from '#exceptions/bad_request_exception'
import env from '#start/env'

@inject()
export default class AuthController {
  constructor(protected piService: PiService) {}

  async authorizeUser({ request, response }: HttpContext) {
    const data = await authorizeUserValidator.validate(request.body())
    let isNew = true

    const piUserInfo = await this.piService.authenticate(data.accessToken)
    if (!piUserInfo) throw new NotFoundException('Pioneer not found')

    const exists = await User.findBy('username', piUserInfo.username)
    if (exists) isNew = false

    // CHECK IF USER EXISTS
    const user = await User.firstOrCreate(
      { username: piUserInfo.username },
      {
        username: piUserInfo.username,
        piUserId: piUserInfo.uid,
        isActive: true,
      }
    )

    // CHECK USER IS ACTIVE
    if (!user.isActive) throw new UnAuthorizedException('Unauthorized: Account is not active')

    // SIGN USER IN
    const token = await User.accessTokens.create(user)
    await user.refresh()
    await user.load('followers')
    await user.load('following')
    await user.load('genre')

    return response.status(200).send(customResponse('Logged in!', { user, token, isNew }))
  }

  async getAuthenticatedAdmin({ auth, response }: HttpContext) {
    const admin = await User.query()
      .where('id', auth.user!.id)
      .preload('followers')
      .preload('following')
      .preload('genre')
      .first()

    if (!admin) throw new NotFoundException("Can't find admin")

    return response.status(200).send(customResponse('Admin details!', admin))
  }

  async registerAdmin({ request, response }: HttpContext) {
    const data = await authorizeAdminValidator.validate(request.body())

    const piUserInfo = await this.piService.authenticate(data.accessToken)
    if (!piUserInfo) throw new NotFoundException('Pioneer not found')

    // CHECK PASS-PHRASE
    if (data.passphrase !== env.get('ADMIN_PASSPHRASE'))
      throw new BadRequestException('Invalid passphrase')

    // CHECK IF USER EXISTS
    let admin: User
    const exists = await User.findBy('role', UserRole.ADMIN)
    if (exists) {
      if (exists.username !== data.user.username || exists.piUserId !== data.user.uid)
        throw new UnAuthorizedException("Unauthorized: can't access this route")
      admin = exists
    } else {
      // CREATE NEW ADMIN
      admin = await User.create({
        username: piUserInfo.username,
        piUserId: piUserInfo.uid,
        isActive: true,
        role: UserRole.ADMIN,
      })
    }

    // SIGN USER IN
    const token = await User.accessTokens.create(admin)
    await admin.refresh()
    await admin.load('followers')
    await admin.load('following')
    await admin.load('genre')
    return response.status(200).send(customResponse('Logged in!', { admin, token }))
  }
}
