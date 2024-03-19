const GenresController = () => import('#controllers/genres_controller')
import router from '@adonisjs/core/services/router'

export default function () {
  router.post('/', [GenresController, 'createGenre'])
  router.get('/', [GenresController, 'getAllGenres'])
}
