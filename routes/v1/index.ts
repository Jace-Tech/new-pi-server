import router from '@adonisjs/core/services/router'
import authRoutes from './auth.routes.js'
import genreRoutes from './genre.routes.js'
import userRoutes from './user.routes.js'
import contentRoutes from './content.routes.js'
import adminRoutes from '../admin/index.js'
import paymentRoutes from './payment.routes.js'

export default function () {
  router
    .group(() => {
      router.group(authRoutes).prefix('auth')
      router.group(genreRoutes).prefix('genre')
      router.group(contentRoutes).prefix('content')
      router.group(userRoutes).prefix('user')
      router.group(adminRoutes).prefix('admin')
      router.group(paymentRoutes).prefix('payment')
    })
    .prefix('v1')
}
