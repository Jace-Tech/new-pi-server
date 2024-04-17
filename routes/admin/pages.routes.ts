const PagesController = () => import('#controllers/pages_controller')
import router from '@adonisjs/core/services/router'

export default function () {
  router.get('/', [PagesController, 'loginPage'])
  router.get('/dashboard', [PagesController, 'dashboardPage']).as('dashboard')
}
