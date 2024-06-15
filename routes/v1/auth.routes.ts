const AuthController = () => import('#controllers/auth_controller')
const UsersController = () => import('#controllers/users_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function () {
  // AUTHORIZE USER
  router.post('/', [AuthController, 'authorizeUser'])

  // GET AUTHORIZED USER
  router.get('/user', [UsersController, 'getAuthenticatedUser']).use([middleware.auth()])
}
