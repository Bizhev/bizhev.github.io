var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cfg = require("../config");
// Static server

gulp.task('server', function() {  
  browserSync.init({    
      server: {
          baseDir: cfg.dest.html
      },
      
  })
});
gulp.task('server:watch2', function () {
    gulp.watch(cfg.src+'/*', gulp.series('server'));    
});
// module.exports = browserSync;