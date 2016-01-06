var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

const dest = './dist';
const base = './app';

gulp.task('default', function() {
  console.log('GULP!');
});

gulp.task('jade', function() {
  gulp.src(base + '/pages/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest(dest));
});

gulp.task('sass', function() {
  gulp.src('./app/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(dest + '/css'));
});

gulp.task('watch', function() {
  gulp.watch(base + '/**/*.jade', ['jade']);
  gulp.watch(base + '/**/*.scss', ['sass']);
});
