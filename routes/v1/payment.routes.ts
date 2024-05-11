const TransactionsController = () => import('#controllers/transactions_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function () {
  router
    .post('/initialize', [TransactionsController, 'handleInitializePayment'])
    .use(middleware.auth())
  router.post('/incomplete', [TransactionsController, 'handleIncompletePayment'])
}
