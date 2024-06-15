import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'

import User from '#models/user'
import Genre from '#models/genre'
import { ContentTypes } from '#enums/content'
import { jsonParser } from '../../utils/helpers.js'
import Transaction from './transaction.js'
import Like from './like.js'
import Comment from './comment.js'

export default class Content extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare title: string

  @column()
  declare userId: string

  @column()
  declare transactionId: string

  @column()
  declare type: ContentTypes

  @column()
  declare genreId: string | null

  @column()
  declare coverImage: string | null

  @column()
  declare contentUrl: string | null

  @column()
  declare displayCutUrl: string | null

  @column()
  declare price: number | null

  @column()
  declare country: string | null

  @column({
    serialize: (value: string) => jsonParser(value),
    consume: (value: string) => jsonParser(value),
  })
  declare features: string[] | null

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isDeleted: boolean

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isActive: boolean

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isVerified: boolean

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isFeatured: boolean

  @column({
    serialize: (value: string) => jsonParser(value),
    consume: (value: string) => jsonParser(value),
  })
  declare metadata: any | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // HOOKS
  @beforeCreate()
  static async assignUuid(content: Content) {
    content.id = uuid()
  }

  // RELATIONSHIPS
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Genre)
  declare genre: BelongsTo<typeof Genre>

  @hasOne(() => Transaction)
  declare transaction: HasOne<typeof Transaction>

  @hasMany(() => Like)
  declare likes: HasMany<typeof Like>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>
}
