const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'

export default function () {
  router.post('/login', [AuthController, 'loginAdmin']).as('login')
  router.post('/register', [AuthController, 'registerAdmin']).as('register')
}
