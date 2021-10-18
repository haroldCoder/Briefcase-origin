const express = require('express');
const rute = express.Router();
const {getInfo} = require('../components/koder.controllers');

rute.route('/')
.get(getInfo);

module.exports = rute;