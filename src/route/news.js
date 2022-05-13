const express = require('express');
const route   = express.Router();

const newController = require('../app/Controller/NewsController');

route.use('/:slug',newController.show);

route.use('/',newController.news);


module.exports = route;