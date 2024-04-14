const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'

export default function () {
  router.post('/', [AuthController, 'authorizeUser'])
}
