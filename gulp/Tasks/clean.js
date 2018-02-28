var gulp = require('gulp');
var cfg = require("../config");
var del = require('del');

gulp.task('clean',function(d){
  del ([cfg.dest.html+'/']);
  d();
});