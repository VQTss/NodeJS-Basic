const path = require('path')
const express = require('express'); // thư viện express 
const morgan = require('morgan'); 
const app = express(); // function
const port = 3000;
const { engine } = require('express-handlebars');
const db = require('./config/db/connect')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

db.connect();
db.sql;
db.conn;
//  middleware
// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(express.json);
// HTTP logger
// app.use(morgan('combined'))
// Static
app.use(express.static(path.join(__dirname,'public')));
// Template engine
app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set("view engine", ".hbs")
app.set('views', path.join(__dirname,'resources/views'))

console.log('Path: ', path.join(__dirname,'resources/views'));
// Route
const route = require('./route/index');
route(app);


app.listen(port,function ()  {
    console.log(`Server is running at port ${port}`);
})