import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeCreate,
  beforeSave,
  belongsTo,
  column,
  hasMany,
} from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Genre from '#models/genre'
import { SocialHandleType, UserCareers, UserRole } from '#enums/user'
import { jsonParser } from '../../utils/helpers.js'
import env from '#start/env'
import Follower from './follower.js'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import hash from '@adonisjs/core/services/hash'
import { v4 as uuid } from 'uuid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare username: string

  @column()
  declare piUserId: string

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

  // HOOKS
  @beforeCreate()
  static assignUuid(user: User) {
    user.id = uuid()
  }

  @beforeSave()
  static convertToString(user: User) {
    if (user.$dirty.socialHandles) {
      user.socialHandles = JSON.stringify(user.socialHandles) as any
    }
  }

  // RELATIONSHIPS
  @belongsTo(() => Genre)
  declare genre: BelongsTo<typeof Genre>

  @hasMany(() => Follower, { foreignKey: 'userId' })
  declare followers: HasMany<typeof Follower>

  @hasMany(() => Follower, { foreignKey: 'followerId' })
  declare following: HasMany<typeof Follower>
}
