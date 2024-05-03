import { UserRole } from '#enums/user'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async loginPage({ view, response }: HttpContext) {
    const admin = await User.query().where('role', UserRole.ADMIN).first()
    if (!admin) return response.redirect().toRoute('registerPage')
    return view.render('login')
  }

  async registerPage({ view, response }: HttpContext) {
    const admin = await User.query().where('role', UserRole.ADMIN).first()
    if (admin) return response.redirect().toRoute('loginPage')
    return view.render('register')
  }

  dashboardPage({ view }: HttpContext) {
    return view.render('dashboard')
  }
}
