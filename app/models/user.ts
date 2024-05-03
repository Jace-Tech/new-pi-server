import { DateTime } from 'luxon'
import { BaseModel, beforeSave, belongsTo, column } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import hash from '@adonisjs/core/services/hash'
import Genre from '#models/genre'
import { SocialHandleType, UserCareers, UserRole } from '#enums/user'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { compose } from '@adonisjs/core/helpers'
import { jsonParser } from '../../utils/helpers.js'
import { Env } from '@adonisjs/core/env'
import env from '#start/env'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare username: string

  @column({
    serialize: () => null,
  })
  declare password: string

  @column()
  declare email: string | null

  @column()
  declare musicName: string | null

  @column()
  declare musicCareer: UserCareers | null

  @column()
  declare role: UserRole | null

  @column()
  declare genreId: string | null

  @column()
  declare country: string | null

  @column()
  declare bio: string | null

  @column({
    serialize: (value) => (value ? env.get('APP_URL') + 'uploads/' + value : null),
  })
  declare profileImage: string | null

  @column({
    serialize: (value) => (value ? env.get('APP_URL') + 'uploads/' + value : null),
  })
  declare coverImage: string | null

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare shadowBanned: boolean

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isVerified: boolean

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isActive: boolean

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isSubscribed: boolean

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isPrivate: boolean

  @column({
    serialize: (value: string) => jsonParser(value),
    consume: (value: string) => jsonParser(value),
  })
  declare socialHandles: SocialHandleType[] | null

  @column()
  declare gender: string | null

  @column()
  declare walletBalance: number

  @column.dateTime()
  declare lastSubscriptionDate: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '30 days',
  })

  // RELATIONSHIPS
  @belongsTo(() => Genre)
  declare genre: BelongsTo<typeof Genre>

  // @hasMany(() => Social)
  // declare social: HasMany<typeof Social>

  @beforeSave()
  static convertToString(user: User) {
    if (user.$dirty.socialHandles) {
      user.socialHandles = JSON.stringify(user.socialHandles) as any
    }
  }
}
