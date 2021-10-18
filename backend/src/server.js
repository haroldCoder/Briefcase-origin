const express = require('express');
const app = express();
const cors = require('cors');
require('./database.js');

app.set('port',process.env.PORT || 8080);
app.use(cors());
app.use(express.json());
app.use('/api/koder',require('./routes/koder.js'));
app.use('/api/users',require('./routes/users.js'));

async function main(){
	await app.listen(app.get('port'));
	console.log(`server on port ${app.get('port')}`);
}
main();