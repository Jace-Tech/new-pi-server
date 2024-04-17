import NotFoundException from '#exceptions/not_found_exception'
import UnAuthorizedException from '#exceptions/un_authorized_exception'
import User from '#models/user'
import PiService from '../services/pi_service.js'
import { authorizeAdminValidator, authorizeUserValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { customResponse } from '../../utils/helpers.js'

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
      }
    )

    // CHECK USER IS ACTIVE
    if (!user.isActive) throw new UnAuthorizedException('Unauthorized: Account is not active')

    // SIGN USER IN
    const token = await User.accessTokens.create(user)
    return response.status(200).send(customResponse('Logged in!', { user, token }))
  }

  async authorizeAdmin({ request, response, auth }: HttpContext) {
    const data = await authorizeAdminValidator.validate(request.body())

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
    await auth.use('web').login(user)
    return response.redirect().toRoute('dashboard')
  }

  async loginPage({ view }: HttpContext) {
    return view.render('login')
  }
}
