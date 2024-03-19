import axios from 'axios'
import { PiEndpoints } from '../../utils/constants.js'

export default class PiService {
  private baseUrl = 'https://api.minepi.com/v2'
  private piRoute = axios.create({
    baseURL: this.baseUrl,
    timeout: 20000,
  })

  async authenticate(accessToken: string) {
    try {
      const response = await this.piRoute.get(PiEndpoints.ME, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data as UserDTO
    } catch (err: any) {
      throw err
    }
  }
}
