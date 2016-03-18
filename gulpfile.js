var gulp = require("gulp");
var concat = require('gulp-concat');

gulp.task('concat-js', function () {
    return gulp.src(["wwwroot/**/*.js"])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch([
        './wwwroot/**/*.ts', './wwwroot/**/*.html', './wwwroot/**/*.css'
    ], ['concat-js']);
});

gulp.task('default', ['concat-js', 'watch']);