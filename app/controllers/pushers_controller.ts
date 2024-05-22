import UnAuthorizedException from '#exceptions/un_authorized_exception'
import User from '#models/user'
import PusherService from '#services/pusher_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class PushersController {
  constructor(protected pusherService: PusherService) {}

  async authenticateUser({ request, response }: HttpContext) {
    const userId = request.qs()['user_id']
    const user = await User.find(userId)
    if (!user) throw new UnAuthorizedException('Unauthorized: unknown user')
    const beamsToken = this.pusherService.generateBeamToken(userId)
    response.send(JSON.stringify(beamsToken))
  }
}
