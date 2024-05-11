// const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'
import auth from './auth.routes.js'

export default function () {
  router.group(auth).prefix('auth')
}
