const PushersController = () => import('#controllers/pushers_controller')
import router from '@adonisjs/core/services/router'

export default function () {
  router.get('/beams-auth', [PushersController, 'authenticateUser'])
}
