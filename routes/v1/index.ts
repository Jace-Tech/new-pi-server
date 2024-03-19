import router from '@adonisjs/core/services/router'
import authRoutes from './auth.routes.js'
import genreRoutes from './genre.routes.js'

export default function () {
  router
    .group(() => {
      router.group(authRoutes).prefix('auth')
      router.group(genreRoutes).prefix('genre')
    })
    .prefix('v1')
}
