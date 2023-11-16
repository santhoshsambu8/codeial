const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('erro',console.error.bind(console,"Error connecting to mongodb"));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;