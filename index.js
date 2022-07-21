

const express = require('express');
const app = express();
const port = 9999;
app.get('/',(req,res) => {
    res.send('<h1> Anand </h1>');
});
app.listen(port,() => {
    console.log('DSbook :: exp server listening on port',port);
})