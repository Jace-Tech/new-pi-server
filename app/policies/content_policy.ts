import { UserCareers, UserRole } from '#enums/user'
import Content from '#models/content'
import User from '#models/user'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class ContentPolicy extends BasePolicy {
  create(user: User): AuthorizerResponse {
    if (user.role === UserRole.ADMIN) return true
    if (user.musicCareer === UserCareers.MUSIC_LOVER) return false
    return user.isActive
  }

  update(user: User, content: Content): AuthorizerResponse {
    if (user.role === UserRole.ADMIN) return true
    return user.id === content.userId
  }

  delete(user: User, content: Content): AuthorizerResponse {
    if (user.role === UserRole.ADMIN) return true
    return user.id === content.userId
  }
}
