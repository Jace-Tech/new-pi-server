import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contents'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .uuid('transaction_id')
        .nullable()
        .references('transactions.id')
        .onDelete('SET NULL')
        .onUpdate('NO ACTION')
      table.boolean('is_featured').defaultTo(false)
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('transaction_id')
      table.dropColumn('is_featured')
    })
  }
}
