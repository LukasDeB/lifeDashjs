'use strict'

const Model = use('Model')

class Character extends Model {

	quests(){
		return this.hasMany('App/Models/Quest')
	}

	dungeons(){
		return this.hasMany('App/Models/Dungeon')
	}

	skills(){
		return this.hasMany('App/Models/Skill')
	}
}

module.exports = Character
