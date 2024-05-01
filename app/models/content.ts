import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import User from '#models/user'
import Genre from '#models/genre'
import { ContentTypes } from '#enums/content'

export default class Content extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare userId: string

  @column()
  declare type: ContentTypes | null

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

  @column({
    serialize: (value: string) => (value ? JSON.parse(value) : null),
    consume: (value: string) => (value ? JSON.parse(value) : null),
  })
  declare features: string[] | null

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isDeleted: boolean | null

  @column({
    serialize: (value: number) => Boolean(value),
    consume: (value: number) => Boolean(value),
  })
  declare isActive: boolean | null

  @column({
    serialize: (value: string) => (value ? JSON.parse(value) : null),
    consume: (value: string) => (value ? JSON.parse(value) : null),
  })
  declare metadata: any | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(content: Content) {
    content.id = uuid()
  }

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Genre)
  declare genre: BelongsTo<typeof Genre>
}
