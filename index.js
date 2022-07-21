

const express = require('express');
const app = express();
const port = 9999;

const express_ejs_layouts = require('express-ejs-layouts');
const path = require('path');
///set up layout
app.use(express_ejs_layouts);
app.set('layout','./layouts/layout1');
app.set("layout extractScripts", true);
app.set('layout extractStyles',true);

//set up static-file midddleware
app.use(express.static('./assets'));

//set up template engine
app.set('views',path.join(__dirname,'/templates'));
app.set('view engine','ejs');

//set up routing
app.use('/',require('./route'));

app.listen(port,() => {
    console.log('DSbook :: exp server listening on port',port);
});