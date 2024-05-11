import LocationService from '#services/location_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class ContentsController {
  async createContent({ request }: HttpContext) {
    const country = await LocationService.getUserLocationByIpAddress(request.ip())
    console.log(country)
  }
}
