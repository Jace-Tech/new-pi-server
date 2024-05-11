import { TransactionKind } from '#enums/transactions'
import vine from '@vinejs/vine'

export const initializePaymentValidator = vine.compile(
  vine.object({
    piPaymentId: vine.string(),
    amount: vine.number(),
    kind: vine.enum(Object.values(TransactionKind)),
    description: vine.string().minLength(3).maxLength(500).optional(),
  })
)

export const incompletePaymentValidator = vine.compile(
  vine.object({
    payment: vine.any(),
  })
)
