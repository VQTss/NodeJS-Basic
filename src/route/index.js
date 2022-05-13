const siteRouter = require('./site');
const newRouter  = require('./news');
const studentRouter =  require('./student');

function router(app) {
    app.use('/student',studentRouter)
    app.use('/news',newRouter);
    app.use('/',siteRouter);
}

module.exports = router;