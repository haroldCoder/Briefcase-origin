const {model,Schema} = require('mongoose');

const newuser = new Schema({
	name: {
		type: String,
		unique: false,
	},
	email: {
		type: String,
		unique: true
	},
	password: {
		type: String,
		unique: false
	}
})
module.exports = model("User",newuser);