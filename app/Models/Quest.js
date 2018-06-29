'use strict'

const Model = use('Model')

class Quest extends Model {
	tasks(){
		return this.hasMany('App/Models/Task')
	}
}

module.exports = Quest
