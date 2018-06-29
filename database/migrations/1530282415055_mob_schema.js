'use strict'

const Schema = use('Schema')

class MobSchema extends Schema {
  up () {
    this.create('mobs', (table) => {
      table.increments()
      table.integer('dungeon_id').unsigned().references('id').inTable('dungeons')
      table.string('name',80).notNullable().unique()
      table.integer('level')
      table.timestamps()
    })
  }

  down () {
    this.drop('mobs')
  }
}

module.exports = MobSchema
