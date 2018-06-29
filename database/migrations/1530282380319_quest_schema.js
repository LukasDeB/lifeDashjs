'use strict'

const Schema = use('Schema')

class QuestSchema extends Schema {
  up () {
    this.create('quests', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('quests')
  }
}

module.exports = QuestSchema
