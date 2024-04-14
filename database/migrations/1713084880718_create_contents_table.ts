import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contents'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table
        .uuid('user_id')
        .nullable()
        .references('users.id')
        .onDelete('SET NULL')
        .onUpdate('NO ACTION')
      table.enum('type', Object.values(ContentTypes)).notNullable()
      table.string('title').notNullable()
      table
        .uuid('genre_id')
        .nullable()
        .references('genres.id')
        .onDelete('SET NULL')
        .onUpdate('NO ACTION')
      table.string('cover_image', 500).nullable()
      table.text('content_url').nullable()
      table.text('display_cut_url').nullable()
      table.float('price').defaultTo(0)
      table.json('features').nullable()
      table.boolean('is_deleted').defaultTo(false)
      table.boolean('is_active').defaultTo(false)
      table.json('metadata').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
