const koder = require('../koder.json');
const koderurl = {};

koderurl.getInfo = (req,res) =>{
   res.json(koder.map(e=>e));
}
module.exports = koderurl;