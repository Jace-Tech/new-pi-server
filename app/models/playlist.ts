import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import User from '#models/user'
import Content from '#models/content'

export default class Playlist extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare userId: string

  @column()
  declare contentId: string

  @column.dateTime()
  declare lastPlayed: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(playlist: Playlist) {
    playlist.id = uuid()
  }

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Content)
  declare content: BelongsTo<typeof Content>
}
