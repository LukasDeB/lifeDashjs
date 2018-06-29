'use strict'

const Model = use('Model')

class Dungeon extends Model {
	bosses(){
		return this.hasMany('App/Models/Boss')
	}

	mobs(){
		return this.hasMany('App/Models/Mob')
	}

	quests(){
		return this.hasMany('App/Models/Quest')
	}

}

module.exports = Dungeon
