var gulp = require('gulp');
var cfg = require("../config");
const babel = require('gulp-babel');
const browserify = require("gulp-browserify");


gulp.task('js', function () {
  return gulp
    .src(cfg.src.js + "/*.js")
    .pipe(babel({ presets: ["env"] }))
    .pipe(browserify({ insertGlobals: true, debug: false }))
    .pipe(gulp.dest(cfg.dest.js));

});

gulp.task('js:watch',function(){
  gulp.watch(cfg.src.js + '/*.js',gulp.parallel('js'))
})