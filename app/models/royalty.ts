import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Content from './content.js'

export default class Royalty extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare userId: string

  @column()
  declare contentId: string

  @column()
  declare amount: number

  @column()
  declare isClaimed: boolean

  @column()
  declare isActive: boolean // IF THE USER CAN CLAIM THE ROYALTY

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // RELATIONSHIPS
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Content)
  declare content: BelongsTo<typeof Content>

  // HOOKS
  @beforeCreate()
  static assignUuid(royalty: Royalty) {
    royalty.id = uuid()
  }
}
