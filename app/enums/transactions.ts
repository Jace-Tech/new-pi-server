export enum TransactionKind {
  SUBSCRIPTION = 'subscription',
  STAKE = 'stake',
  PURCHASE = 'purchase',
  TOKEN = 'token',
}

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

export enum TransactionStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  CANCELLED = 'cancelled',
  ERROR = 'error',
}

export enum TransactionErrorResponseMessages {
  NOT_FOUND = 'Transaction not found',
}

export enum TransactionSuccessResponseMessages {
  INITIALIZE = 'Payment request approved, Proceed with transaction',
  COMPLETED = 'Payment completed',
}
