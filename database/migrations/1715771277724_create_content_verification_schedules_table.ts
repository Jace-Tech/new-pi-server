import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'content_verification_schedules'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.uuid('content_id').references('contents.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamp('scheduled_date').nullable()
      table.enum('status', ['pending', 'verified', 'rejected', 'scheduled']).defaultTo('pending')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
