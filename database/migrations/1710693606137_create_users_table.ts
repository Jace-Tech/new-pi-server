import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('email', 254).nullable().unique()
      table.string('username').notNullable()
      table.string('password').nullable()
      table.string('pi_user_id').nullable()
      table.string('music_name').nullable()
      table.enum('music_career', ['producer', 'artist', 'music-lover', 'record-label']).nullable()
      table.enum('role', ['user', 'admin']).nullable()
      table.uuid('genre_id').references('genres.id').onDelete('SET NULL').onUpdate('NO ACTION')
      table.string('country').nullable()
      table.text('bio').nullable()
      table.json('social_handles').nullable()
      table.string('profile_image', 500).nullable()
      table.string('cover_image', 500).nullable()
      table.boolean('shadow_banned').defaultTo(false)
      table.boolean('is_verified').defaultTo(false)
      table.boolean('is_subscribed').defaultTo(false)
      table.boolean('is_active').defaultTo(true)
      table.boolean('is_private').defaultTo(false)
      table.string('gender').nullable()
      table.double('wallet_balance').defaultTo(0)
      table.dateTime('last_subscription_date').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
