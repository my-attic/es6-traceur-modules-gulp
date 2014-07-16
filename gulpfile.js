var gulp = require('gulp');
var run = require('gulp-run');
var fs = require('fs');

gulp.task('default', function() {
  gulp.watch(['public/js/**/*.js','!public/js/app/app-build.js'], function(event) {
    console.log('File '+event.path+' was '+event.type);

    fs.unlink('public/js/app/app-build.js', function (err) {
      if (err) {};
      run("traceur --out public/js/app/app-build.js public/js/app/*.js public/js/app/**/*.js --modules=inline").exec();
    });

  });
});




