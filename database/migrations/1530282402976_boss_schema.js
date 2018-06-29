'use strict'

const Schema = use('Schema')

class BossSchema extends Schema {
  up () {
    this.create('bosses', (table) => {
      table.increments()
      table.integer('dungeon_id').unsigned().references('id').inTable('dungeons')
      table.string('name',80).notNullable().unique()
      table.integer('level')
      table.timestamps()
    })
  }

  down () {
    this.drop('bosses')
  }
}

module.exports = BossSchema
