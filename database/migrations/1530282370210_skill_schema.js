'use strict'

const Schema = use('Schema')

class SkillSchema extends Schema {
  up () {
    this.create('skills', (table) => {
      table.increments()
      table.integer('character_id').unsigned().references('id').inTable('characters')
      table.string('name').notNullable().unique()
      table.integer('current_level')
      table.integer('max_level')
      table.timestamps()
    })
  }

  down () {
    this.drop('skills')
  }
}

module.exports = SkillSchema
