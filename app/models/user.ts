import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import Genre from './genre.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

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
  declare profileImage: string | null

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

  // RELATIONSHIPS
  @hasOne(() => Genre)
  declare user: HasOne<typeof Genre>
}
