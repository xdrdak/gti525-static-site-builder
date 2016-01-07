const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const w3cjs = require('gulp-w3cjs');
const w3ccss = require('gulp-w3c-css');
const gutil = require('gulp-util');

const dest = './dist';
const base = './app';

gulp.task('default', ['server', 'watch']);
gulp.task('serve', ['server', 'watch']);
gulp.task('build', ['jade', 'sass']);

gulp.task('validate', () => {
   gulp.src(dest + '/*.html')
  .pipe(w3cjs())
  .pipe(w3cjs.reporter());
   
  gulp.src(dest + '/css/*.css')
  .pipe(w3ccss())
  .pipe(gutil.buffer((err, files) => {
    files.forEach((result) => {
      console.log(result.contents.toString());
    });
  }));
});

gulp.task('jade', () => {
  gulp.src(base + '/pages/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest(dest));
});

gulp.task('sass', () => {
  gulp.src('./app/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(dest + '/css'));
});

gulp.task('server', () => {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('reload', () => {
  gulp.src('./dist/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(base + '/**/*.jade', ['jade', 'reload']);
  gulp.watch(base + '/**/*.scss', ['sass','reload']);
});
