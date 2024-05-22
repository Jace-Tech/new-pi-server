import Genre from '#models/genre'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Genre.createMany([
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
}
