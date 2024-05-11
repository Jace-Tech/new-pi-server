import app from '@adonisjs/core/services/app'
import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import { arrayTransformer, customResponse } from '../../utils/helpers.js'

type ErrorMessageType = {
  message: string
  rule: string
  field: string
}
export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: any, ctx: HttpContext) {
    let messages = error?.messages
      ? error.messages.map((msg: ErrorMessageType) => msg.message)
      : error.message
    messages = arrayTransformer(messages)
    return ctx.response.status(error.status).send(customResponse(messages, null, false))
  }

  /**
   * The method is used to report error to the logging service or
   * the third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
