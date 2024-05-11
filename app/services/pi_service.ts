import axios from 'axios'
import { PiEndpoints } from '../../utils/constants.js'
import env from '#start/env'
import ServerErrorException from '#exceptions/server_error_exception'

export default class PiService {
  private baseUrl = 'https://api.minepi.com/v2'
  private piRoute = axios.create({
    baseURL: this.baseUrl,
    timeout: 50000,
    headers: {
      Authorization: `key ${env.get('PI_API_KEY')}`,
    },
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
      throw new ServerErrorException(err.message)
    }
  }

  async approvePayment(paymentId: string): Promise<PaymentDTO | ServerErrorException> {
    try {
      const response = await this.piRoute.post(
        PiEndpoints.APPROVE_PAYMENT.replace(':id', paymentId)
      )
      return response.data as PaymentDTO
    } catch (err: any) {
      throw new ServerErrorException(err.message)
    }
  }

  async completePayment(
    paymentId: string,
    txid: string
  ): Promise<PaymentDTO | ServerErrorException> {
    try {
      const response = await this.piRoute.post(
        PiEndpoints.COMPLETE_PAYMENT.replace(':id', paymentId),
        { txid }
      )
      return response.data as PaymentDTO
    } catch (err: any) {
      throw new ServerErrorException(err.message)
    }
  }

  async getPaymentById(paymentId: string): Promise<PaymentDTO | ServerErrorException> {
    try {
      const response = await this.piRoute.get(PiEndpoints.PAYMENT_DETAILS.replace(':id', paymentId))
      return response.data as PaymentDTO
    } catch (err: any) {
      throw new ServerErrorException(err.message)
    }
  }
}
