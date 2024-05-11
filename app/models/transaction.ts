import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import { TransactionKind, TransactionStatus, TransactionType } from '#enums/transactions'
import { jsonParser } from '../../utils/helpers.js'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare amount: number

  @column()
  declare userId: string

  @column()
  declare contentId: string | null

  @column()
  declare piPaymentId: string

  @column()
  declare description: string

  @column()
  declare status: TransactionStatus

  @column()
  declare type: TransactionType

  @column()
  declare kind: TransactionKind

  @column({
    serialize: (value: string) => jsonParser(value),
    consume: (value: string) => jsonParser(value),
  })
  declare meta: Record<string, any>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(transaction: Transaction) {
    transaction.id = uuid()
  }
}
