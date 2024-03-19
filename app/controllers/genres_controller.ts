import BadRequestException from '#exceptions/bad_request_exception'
import Genre from '#models/genre'
import { createGenreValidator } from '#validators/genre'
import type { HttpContext } from '@adonisjs/core/http'
import { customResponse } from '../../utils/helpers.js'

export default class GenresController {
  // HANDLE CREATE GENRE
  async createGenre({ request, response }: HttpContext) {
    const payload = await createGenreValidator.validate(request.body())

    // CHECK IF GENRE EXISTS
    const exists = await Genre.findBy('name', payload.name)
    if (exists) throw new BadRequestException('Genre already exists')

    // CREATE ONE IF NOT EXIST
    const genre = await Genre.create(payload)
    return response.status(201).send(customResponse('Genre created', genre))
  }

  // HANDLE FETCH ALL GENRES
  async getAllGenres({ response }: HttpContext) {
    const genres = await Genre.all()
    return response.status(201).send(customResponse('All genres', genres))
  }
}
