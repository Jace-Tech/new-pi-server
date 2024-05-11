import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.double('amount').notNullable()
      table
        .uuid('user_id')
        .references('users.id')
        .onDelete('SET NULL')
        .onUpdate('NO ACTION')
        .nullable()
      table
        .uuid('content_id')
        .references('contents.id')
        .onDelete('SET NULL')
        .onUpdate('NO ACTION')
        .nullable()
      table.enum('status', ['pending', 'success', 'cancelled', 'error']).defaultTo('pending')
      table.enum('kind', ['subscription', 'stake', 'purchase', 'token']).defaultTo('stake')
      table.enum('type', ['credit', 'debit']).defaultTo('debit')
      table.string('description', 500).nullable()
      table.string('pi_payment_id', 500).nullable()
      table.json('meta').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
