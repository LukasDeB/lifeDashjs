'use strict'

const Schema = use('Schema')

class DungeonSchema extends Schema {
  up () {
    this.create('dungeons', (table) => {
      table.increments()
      table.integer('character_id').unsigned().references('id').inTable('characters')
      table.string('name', 80).notNullable().unique()
      table.string('description', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dungeons')
  }
}

module.exports = DungeonSchema
