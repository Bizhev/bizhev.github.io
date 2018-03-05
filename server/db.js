// const mongoose = require('mongoose');

var mongooseLib = require('./lib/mongoose.js');

var userModel = require('./models/users.js').User;

var userData = new userModel({
  username: 'Dolet',
  hashedPassword: 'Bizhev',
  age: 01
});

userModel.findOne({age:01}, function(err,res){
  console.log("WHAT?")
  console.log(res)
});

userData.save(function (err, kitty, affected){

  if (err) {
    console.log(err);
  } else {
    console.log('meow:',kitty.username);
  };
});







// var log  = require('./log')(module);

// mongoose.connect('mongodb://localhost/database');
// var db = mongoose.connection;
// db.on('error', function (err) {
//   log.error('connection error:', err.message);
// });
// db.once('open', function callback () {
//   log.info("Connected to DB!");
// });

// var Schema = mongoose.Schema;

// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });


// database = {

// }


// module.exports = database;