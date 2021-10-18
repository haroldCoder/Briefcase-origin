const Users = require('../models/createusers.js');
const usersctrl = {};

usersctrl.getUsers = async(req,res) =>{
	const users = await Users.find();
	res.json(users)
}
usersctrl.pushUsers = async(req,res) =>{
    const {name,email,password} = req.body;
	Users.create({
		name: name,
		email: email,
		password: password
	})
}
usersctrl.deleteUser = async(req,res) =>{
	const {id} = req.params;
	await Users.findByIdAndDelete(id);
	res.json({d: 22})
}
module.exports = usersctrl;