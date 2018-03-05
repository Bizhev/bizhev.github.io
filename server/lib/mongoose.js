console.log('download mongoose.js');

// var fs = require('fs');

var mongoose = require( 'mongoose');
// import config from '../config';

var mongoConf = 'mongodb://localhost:27017/myblog';
mongoose.Promise = global.Promise;

mongoose.connect(mongoConf);

module.exports = mongoose ; 