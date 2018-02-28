console.log('user model USER.JS')
var mongoose = require('../lib/mongoose.js');
   
  var schema = new mongoose.Schema ({
    username: {
      type: String,
      required: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: false
    },
    created:{
      type: Date,
      default:Date.now
    }

  });

module.exports.User = mongoose.model('User', schema)