import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'royalties'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('user_id').references('users.id').onDelete('SET NULL').onUpdate('CASCADE')
      table.uuid('content_id').references('contents.id').onDelete('SET NULL').onUpdate('CASCADE')
      table.boolean('is_claimed').defaultTo(false)
      table.boolean('is_active').defaultTo(false)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
