'use strict'

const Schema = use('Schema')

class CharacterSchema extends Schema {
  up () {
    this.create('characters', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name',80).notNullable().unique()
      table.integer('level')
      table.timestamps()
    })
  }

  down () {
    this.drop('characters')
  }
}

module.exports = CharacterSchema
