const AuthController = () => import('#controllers/auth_controller')
import { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'

export default function () {
  router.post('/login', [AuthController, 'loginAdmin']).as('login')
  router.post('/register', [AuthController, 'registerAdmin']).as('register')
  router.get('/', ({ view }: HttpContext) => {
    return view.render('index')
  })
}
