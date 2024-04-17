import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  loginPage({ view }: HttpContext) {
    return view.render('login')
  }

  dashboardPage({ view }: HttpContext) {
    return view.render('dashboard')
  }
}
