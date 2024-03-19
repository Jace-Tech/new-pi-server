import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'
import { customResponse } from '../../utils/helpers.js'

export default class NotFoundException extends Exception {
  static status = 404
  static code = 'E_NOTFOUND'

  async handle(error: this, ctx: HttpContext) {
    ctx.response.status(error.status).send(customResponse(error.message, null, false))
  }

  async report(error: this, ctx: HttpContext) {
    ctx.logger.error({ err: error }, error.message)
  }
}
