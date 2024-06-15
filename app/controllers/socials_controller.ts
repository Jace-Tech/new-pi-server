import Social from '#models/social'
import { socialValidator } from '#validators/social'
import type { HttpContext } from '@adonisjs/core/http'
import { customResponse } from '../../utils/helpers.js'

export default class SocialsController {
  async createUserSocials({ auth, request, response }: HttpContext) {
    const payload = await request.validateUsing(socialValidator)
    const socials: Partial<Social>[] = payload.socials.map((social) => ({
      ...social,
      userId: auth.user?.id,
    }))
    const result = await Social.createMany(socials)
    return response.status(200).send(customResponse('Social created!', result))
  }
}
