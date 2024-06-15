const ContentsController = () => import('#controllers/contents_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function () {
  // CREATE CONTENT
  router
    .post('/', [ContentsController, 'createContent'])
    .use([middleware.admin(), middleware.auth()])

  // FETCH CONTENTS
  router.get('/', [ContentsController, 'fetchContents'])

  // FETCH ONE CONTENT
  router.get('/:id', [ContentsController, 'fetchContent'])

  // DELETE CONTENT
  router
    .delete('/:id', [ContentsController, 'deleteContent'])
    .use([middleware.auth(), middleware.admin()])

  // UPDATE CONTENT
  router
    .patch('/:id', [ContentsController, 'updateContent'])
    .use([middleware.auth(), middleware.admin()])

  // FETCH DELETED CONTENTS
  router.get('/deleted', [ContentsController, 'fetchDeletedContents']).use([middleware.admin()])

  // FETCH DEACTIVATED CONTENTS
  router
    .get('/deactivated', [ContentsController, 'fetchDeactivatedContents'])
    .use([middleware.admin()])

  // FETCH ALL CONTENTS
  router.get('/all', [ContentsController, 'fetchAllContents']).use([middleware.admin()])

  // VERIFY CONTENT
  router.get('/:id/verify', [ContentsController, 'verifyContent']).use([middleware.admin()])
}
