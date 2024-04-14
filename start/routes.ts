import router from '@adonisjs/core/services/router'
import env from '#start/env'
import routes from '../routes/index.js'

router.group(routes)

router.get('/', async () => {
  return {
    app: env.get('APP_NAME', 'Soundpy') + ' API',
    status: 'Running',
  }
})
