const {Router} = require('express');
const route = Router();
const {getUsers,pushUsers,deleteUser} = require('../components/users.controllers.js');

route.route('/')
.get(getUsers)
.post(pushUsers)
.delete(deleteUser)
route.route('/:id')
.delete(deleteUser);

module.exports = route;