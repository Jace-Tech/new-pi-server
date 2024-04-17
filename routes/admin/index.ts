// const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'
import auth from './auth.routes.js'
import pagesRoutes from './pages.routes.js'

export default function () {
  router.group(auth).prefix('auth')
  router.group(pagesRoutes)
}
