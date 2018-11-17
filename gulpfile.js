const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], () => {

  browserSync.init({
    server: "./"
  });

  gulp.watch("./sass/**/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("./sass/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);