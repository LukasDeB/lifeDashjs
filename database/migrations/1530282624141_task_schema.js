'use strict'

const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.integer('quest_id').unsigned().references('id').inTable('quests')
      table.string('name',80).notNullable().unique()
      table.string('description', 250)
      table.string('commentary', 250)
      table.integer('completion')
      table.integer('level')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
