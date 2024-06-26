import router from '@adonisjs/core/services/router'
import v1 from './v1/index.js'
import uploadsRoutes from './uploads.routes.js'
import pusherRoutes from './pusher.routes.js'

export default function () {
  return router.group(() => {
    // API
    router.group(v1).prefix('api')

    // UPLOADS
    router.group(uploadsRoutes)

    // PUSHSER
    router.group(pusherRoutes).prefix('pusher')
  })
}
