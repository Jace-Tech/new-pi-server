import { UserRole } from '#enums/user'
import UnAuthorizedException from '#exceptions/un_authorized_exception'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AdminMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (!ctx.auth.isAuthenticated || !ctx.auth.user)
      throw new UnAuthorizedException('Unauthorized: login to continue')

    if (ctx.auth.user.role !== UserRole.ADMIN)
      throw new UnAuthorizedException("Unauthorized: can't access this route")

    const output = await next()
    return output
  }
}
