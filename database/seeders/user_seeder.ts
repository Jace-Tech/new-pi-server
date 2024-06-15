import { UserCareers } from '#enums/user'
import Genre from '#models/genre'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'
import { faker } from '@faker-js/faker'
import { v4 as uuid } from 'uuid'
import { randomChoice } from '../../utils/helpers.js'

export default class extends BaseSeeder {
  async run() {
    // CHECK IF THERE'RE USERS ALREADY
    // const existingUsers = await db.from(User.table).count('*')
    // if (existingUsers) return

    // GET GENRES
    let genres = (await db.from(Genre.table).select('*').orderBy('id', 'asc')) as Genre[]
    if (!genres) {
      genres = await Genre.createMany([
        {
          name: 'Jazz',
        },
        {
          name: 'Classical',
        },
        {
          name: 'Blues',
        },
        {
          name: 'Country',
        },
      ])
    }
    // GENERATE RANDOM USERS
    const users: Partial<User>[] = []
    const musicCarrers: UserCareers[] = [
      UserCareers.ARTIST,
      UserCareers.MUSIC_LOVER,
      UserCareers.PRODUCER,
      UserCareers.RECORD_LABEL,
    ]

    for (let count = 0; count < 10; count++) {
      const user: Partial<User> = {
        id: uuid(),
        username: faker.person.firstName(),
        musicCareer: randomChoice(musicCarrers),
        musicName: faker.person.firstName(),
        country: faker.location.country(),
        email: faker.internet.email(),
        genreId: randomChoice(genres).id,
        piUserId: uuid(),
      }

      users.push(user)
    }
    await User.createMany(users)
  }
}
