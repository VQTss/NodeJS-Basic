const express = require('express');
const  route  = express.Router();

const siteController = require('../app/Controller/SiteController');


route.post('/register',siteController.register);

route.get('/student/:name',siteController.student);

route.delete('/delete')
// Post là nhận từ dữ liệu từ client  gữi lên thông qua phương thức put
route.put('/update',siteController.update) 

// Post là nhận từ dữ liệu từ client gữi lên thông qua phương thức post
route.post('/search',siteController.search);
// Phương thức get
route.get('/',siteController.home);

module.exports = route;
