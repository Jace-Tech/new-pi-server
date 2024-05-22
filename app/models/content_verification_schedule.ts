import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'

export enum VerificationStatus {
  VERIFIED = 'verified',
  REJECTED = 'rejected',
  SCHEDULED = 'scheduled',
  PENDING = 'pending',
}

export default class ContentVerificationSchedule extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare userId: string

  @column()
  declare contentId: string

  @column()
  declare scheduledDate: DateTime

  @column()
  declare status: VerificationStatus

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(schedule: ContentVerificationSchedule) {
    schedule.id = uuid()
  }
}
