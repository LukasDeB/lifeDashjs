'use strict'

const Model = use('Model')

class Skill extends Model {
	quests(){
		return this.hasMany('App/Models/Quest')
	}
}

module.exports = Skill
