const AuthController = () => import('#controllers/auth_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function () {
  router.post('/', [AuthController, 'registerAdmin']).as('register')

  // GET AUTHORIZED ADMIN
  router.get('/', [AuthController, 'getAuthenticatedAdmin']).use([middleware.auth()])
}
