import router from '@adonisjs/core/services/router'
import v1 from './v1/index.js'
import uploadsRoutes from './uploads.routes.js'

export default function () {
  return router.group(() => {
    // API
    router.group(v1).prefix('api')

    // UPLOADS
    router.group(uploadsRoutes)
  })
}
