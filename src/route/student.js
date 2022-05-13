const express  = require('express');
const route    =  express.Router();

const studentController = require('../app/Controller/StudentController');

route.use('/',studentController.getList);




module.exports = route;