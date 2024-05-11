const ContentsController = () => import('#controllers/contents_controller')
import router from '@adonisjs/core/services/router'

export default function () {
  router.post('/', [ContentsController, 'createContent'])
}
