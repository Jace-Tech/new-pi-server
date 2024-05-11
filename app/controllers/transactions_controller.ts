import {
  TransactionErrorResponseMessages,
  TransactionKind,
  TransactionSuccessResponseMessages,
  TransactionType,
} from '#enums/transactions'
import ServerErrorException from '#exceptions/server_error_exception'
import Transaction from '#models/transaction'
import PiService from '#services/pi_service'
import { incompletePaymentValidator, initializePaymentValidator } from '#validators/payment'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { customResponse } from '../../utils/helpers.js'
import NotFoundException from '#exceptions/not_found_exception'

const kindMapType: Record<TransactionKind, TransactionType> = {
  purchase: TransactionType.DEBIT,
  stake: TransactionType.DEBIT,
  subscription: TransactionType.DEBIT,
  token: TransactionType.CREDIT,
}

@inject()
export default class TransactionsController {
  constructor(protected piService: PiService) {}

  async handleInitializePayment({ request, response, auth }: HttpContext) {
    // VALIDATE REQUEST
    const payload = await request.validateUsing(initializePaymentValidator)
    const type = kindMapType[payload.kind]

    // CREATE TRANSACTION RECORD
    const transaction = await Transaction.create({
      ...payload,
      type,
      userId: auth.user?.id,
    })

    // APPROVE TRANSACTION
    const result = await this.piService.approvePayment(payload.piPaymentId)
    if (result instanceof ServerErrorException) throw result

    // UPDATE TRANSACTIONS
    transaction.meta = result
    await transaction.save()

    return response.status(200).send(customResponse(TransactionSuccessResponseMessages.INITIALIZE))
  }

  async handleIncompletePayment({ request, response }: HttpContext) {
    // VALIDATE REQUEST
    const payload = await request.validateUsing(incompletePaymentValidator)
    const payment = payload.payment as PaymentDTO
    const txid = payment.transaction && payment.transaction.txid

    // FIND THE TRANSACTION
    const transaction = await Transaction.findBy('pi_payment_id', payment.identifier)
    if (!transaction) throw new NotFoundException(TransactionErrorResponseMessages.NOT_FOUND)

    // COMPLETE TRANSACTION
    const result = await this.piService.completePayment(payment.identifier, txid as string)
    if (result instanceof ServerErrorException) throw result

    return response.status(200).send(customResponse(TransactionSuccessResponseMessages.COMPLETED))
  }
}
