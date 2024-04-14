import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { v4 as uuid } from 'uuid'
import Genre from '#models/genre'
import Social from '#models/social'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare username: string

  @column()
  declare email: string | null

  @column()
  declare musicName: string | null

  @column()
  declare musicCarrer: UserCarrers | null

  @column()
  declare role: UserRole | null

  @column()
  declare genreId: string | null

  @column()
  declare country: string | null

  @column()
  declare bio: string | null

  @column()
  declare profileImage: string | null

  @column()
  declare coverImage: string | null

  @column()
  declare shadowBanned: boolean

  @column()
  declare isVerified: boolean

  @column()
  declare isActive: boolean

  @column()
  declare isSubscribed: boolean

  @column()
  declare isPrivate: boolean

  @column()
  declare gender: string | null

  @column()
  declare wallet: string | null

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

  // RELATIONSHIPS
  @hasOne(() => Genre)
  declare user: HasOne<typeof Genre>

  @hasMany(() => Social)
  declare social: HasMany<typeof Social>
}
