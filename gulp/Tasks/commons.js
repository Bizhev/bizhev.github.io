var gulp = require("gulp");
var cfg = require("../config");
const babel = require("gulp-babel");
const browserify = require("gulp-browserify");

gulp.task("commons", function(done) {
  gulp
  .src(cfg.src.img + "/*.{jpg,png}")
  .pipe(gulp.dest(cfg.dest.img));
  gulp
  .src(cfg.src.sass + "/*.css")
  .pipe(gulp.dest(cfg.dest.css));
 
  done();
});


gulp.task("commons:watch", function() {
  gulp.watch(cfg.src.img + "/*.{jpg,png}", gulp.parallel("commons"));
});
