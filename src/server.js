const express = require("express");
const app = express();
const route = express.Router();

route.get('/',(req,res)=>{
	res.send("HELLO MASTER");
})
app.set('port',1080);

async function main(){
	await app.listen(route.get('port'));
	console.log('server conected');
}
main();
