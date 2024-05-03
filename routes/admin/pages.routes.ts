const PagesController = () => import('#controllers/pages_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function () {
  router.get('/', [PagesController, 'loginPage']).as('loginPage')
  router.get('/register', [PagesController, 'registerPage']).as('registerPage')
  router
    .get('/dashboard', [PagesController, 'dashboardPage'])
    .as('dashboard')
    .use(middleware.auth())
}
