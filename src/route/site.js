const express = require('express');
const  route  = express.Router();

const siteController = require('../app/Controller/SiteController');



route.use('/search',siteController.search);
route.use('/',siteController.home);

module.exports = route;
