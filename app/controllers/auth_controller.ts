import NotFoundException from '#exceptions/not_found_exception'
import UnAuthorizedException from '#exceptions/un_authorized_exception'
import User from '#models/user'
import PiService from '../services/pi_service.js'
import {
  authorizeAdminValidator,
  authorizeUserValidator,
  registerAdminValidator,
} from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { customResponse } from '../../utils/helpers.js'
import BadRequestException from '#exceptions/bad_request_exception'
import { v4 as uuid } from 'uuid'
import { UserRole } from '#enums/user'

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
        id: piUserInfo.uid,
        isActive: true,
      }
    )

    // CHECK USER IS ACTIVE
    if (!user.isActive) throw new UnAuthorizedException('Unauthorized: Account is not active')

    // SIGN USER IN
    const token = await User.accessTokens.create(user)
    await user.refresh()
    return response.status(200).send(customResponse('Logged in!', { user, token }))
  }

  async loginAdmin({ request, response, auth, session }: HttpContext) {
    try {
      const data = await authorizeAdminValidator.validate(request.body())
      const user = await User.verifyCredentials(data.email, data.password)
      // SIGN USER IN
      await auth.use('web').login(user)
      return response.redirect().toRoute('dashboard')
    } catch (err: any) {
      // FLASH MESSAGE
      session.flash('alert', {
        type: 'error',
        message: err.message,
      })
      return response.redirect().back()
    }
  }

  async registerAdmin({ request, response, session }: HttpContext) {
    try {
      const data = await registerAdminValidator.validate(request.body())

      // CHECK IF ACCOUNT EXISTS
      const exists = await User.query().where('email', data.email).first()
      if (exists) throw new BadRequestException('Email already exists')

      // CREATE ACCOUNT
      await User.create({
        id: uuid(),
        ...data,
        role: UserRole.ADMIN,
      })

      // FLASH MESSAGE
      session.flash('alert', {
        type: 'success',
        message: 'Registration successful',
      })

      // SIGN USER IN
      return response.redirect().toRoute('loginPage')
    } catch (err: any) {
      // FLASH MESSAGE
      session.flash('alert', {
        type: 'error',
        message: err.message,
      })
      return response.redirect().back()
    }
  }
}
