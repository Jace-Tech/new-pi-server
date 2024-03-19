import router from '@adonisjs/core/services/router'
import v1 from './v1/index.js'

export default function () {
  return router.group(() => {
    router.group(v1)
  })
}
