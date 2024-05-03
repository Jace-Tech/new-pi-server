const UsersController = () => import('#controllers/users_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function () {
  router.patch('/:id', [UsersController, 'updateUserDetails']).use(middleware.auth())
  router.patch('/:id/uploads', [UsersController, 'updateUserUploads']).use(middleware.auth())
}
