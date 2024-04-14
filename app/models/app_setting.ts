import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'

export default class AppSetting extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column({
    serialize: (value: string) => (value ? JSON.parse(value) : null),
    consume: (value: string) => (value ? JSON.parse(value) : null),
  })
  declare value: any

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(appSettings: AppSetting) {
    appSettings.id = uuid()
  }
}
