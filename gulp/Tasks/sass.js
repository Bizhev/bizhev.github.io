var gulp = require('gulp');
var cfg = require("../config");
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp
  
  .src(cfg.src.sass + '/**/*.{sass,scss}') 
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(cfg.dest.css))

});

gulp.task('sass:watch', function() {
  gulp.watch(cfg.src.sass + '/**/*.{sass,scss}', gulp.parallel('sass'));
});
