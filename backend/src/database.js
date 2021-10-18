const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI ?
 process.env.MONGODB_URI
 : 'mongodb://localhost/mernstack';
 mongoose.connect(uri,{
	 useNewUrlParser: true
 });

const conection = mongoose.connection;

conection.once('open',()=>{
	console.log('db is connected');
})