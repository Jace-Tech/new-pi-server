import NotFoundException from '#exceptions/not_found_exception'
import UnAuthorizedException from '#exceptions/un_authorized_exception'
import User from '#models/user'
import PiService from '../services/pi_service.js'
import {
  authorizeAdminValidator,
  authorizeUserValidator,
  loginAdminValidator,
} from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { customResponse } from '../../utils/helpers.js'
import { UserRole } from '#enums/user'
import BadRequestException from '#exceptions/bad_request_exception'

@inject()
export default class AuthController {
  constructor(protected piService: PiService) {}

  async authorizeUser({ request, response }: HttpContext) {
    const data = await authorizeUserValidator.validate(request.body())

    const piUserInfo = await this.piService.authenticate(data.accessToken)
    if (!piUserInfo) throw new NotFoundException('Pioneer not found')

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
    return response.status(200).send(customResponse('Logged in!', { user, token }))
  }

  async registerAdmin({ request, response }: HttpContext) {
    const data = await authorizeAdminValidator.validate(request.body())

    const piUserInfo = await this.piService.authenticate(data.accessToken)
    if (!piUserInfo) throw new NotFoundException('Pioneer not found')

    // CHECK IF USER EXISTS
    const exists = await User.findBy('role', UserRole.ADMIN)
    if (exists) throw new BadRequestException('Admin already exist')

    // CREATE NEW ADMIN
    const admin = await User.create({
      username: piUserInfo.username,
      piUserId: piUserInfo.uid,
      isActive: true,
      role: UserRole.ADMIN,
    })

    // SIGN USER IN
    const token = await User.accessTokens.create(admin)
    await admin.refresh()
    await admin.load('followers')
    await admin.load('following')
    await admin.load('genre')
    return response.status(200).send(customResponse('Logged in!', { admin, token }))
  }

  async loginAdmin({ request, response }: HttpContext) {
    const data = await loginAdminValidator.validate(request.body())
    const admin = await User.verifyCredentials(data.email, data.password)

    // SIGN ADMIN IN
    const token = await User.accessTokens.create(admin)
    await admin.refresh()
    await admin.load('followers')
    await admin.load('following')
    await admin.load('genre')
    return response.status(200).send(customResponse('Logged in!', { admin, token }))
  }
}
