var gulp = require('gulp');
var cfg = require("../config");
// var browserSync = require('./browser-sync');

const nunjucks = require('gulp-nunjucks');
var nunjucksTemplate = require('../../server/nunjucks');

// console.log(nunjucksTemplate);
gulp.task('nunjucks', function () {  
return gulp
  .src(cfg.src.root + '/**/**.html') 
  .pipe(nunjucks.compile(nunjucksTemplate)) 
  .pipe(gulp.dest(cfg.dest.html));  
});


gulp.task('ninjucks:watch',function(){
  gulp.watch(cfg.src.root + '/**/**.html', gulp.series('nunjucks'))
})