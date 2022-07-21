

const mongoose = require('mongoose');
//Connect to  db
mongoose.connect('mongodb://localhost/DSbook');
//accesing the connection
const db = mongoose.connection;
//error handling and veryfying conecttion
db.on('error',console.error.bind(console,'Error in connecting DSbook db'));
db.once('open', () => {
    console.log('DSbook :: connected to db : DSbook');
});

//export it
module.exports = db;