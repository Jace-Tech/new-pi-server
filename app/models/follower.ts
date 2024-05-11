import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Follower extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare userId: string

  @column()
  declare followerId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(follower: Follower) {
    follower.id = uuid()
  }

  // RELATIONSHIPS
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
