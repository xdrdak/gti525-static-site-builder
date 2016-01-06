const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

const dest = './dist';
const base = './app';

gulp.task('default', ['server', 'watch']);

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

gulp.task('server', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('reload', function() {
  gulp.src('./dist/*.html')
    .pipe(connect.reload());
});
gulp.task('watch', function() {
  gulp.watch(base + '/**/*.jade', ['jade', 'reload']);
  gulp.watch(base + '/**/*.scss', ['sass','reload']);
});
