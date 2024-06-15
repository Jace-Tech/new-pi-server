import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'replies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('comment_id').references('comments.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.uuid('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('message', 500).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
