const UsersController = () => import('#controllers/users_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function () {
  router.patch('/:id', [UsersController, 'updateUserDetails']).use(middleware.auth())
  router.patch('/:id/uploads', [UsersController, 'updateUserUploads']).use(middleware.auth())
  router.get('/users', [UsersController, 'getAllUsers']).use(middleware.auth())
  router.get('/:id', [UsersController, 'getOneUser']).use(middleware.auth())
  router
    .patch('/:id/status', [UsersController, 'updateUserStatus'])
    .use([middleware.auth(), middleware.admin()])
}
