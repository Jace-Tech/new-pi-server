import env from '#start/env'
import axios from 'axios'

export default class LocationService {
  static async getUserLocationByIpAddress(ip: string): Promise<LocationResponse> {
    const { data } = await axios.get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${env.get('ABSTRACT_API_KEY')}&ip_address=${ip}`
    )
    return data
  }
}
