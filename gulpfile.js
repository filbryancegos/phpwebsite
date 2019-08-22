const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const errorHandler = require('gulp-error-handle');

//catch potential error
const logError = function(err) {
  gutil.log(err);
  this.emit('end');
};

gulp.task('css', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
});

gulp.task('images', function() {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
});

gulp.task('copy', function() {
   return gulp.src('./src/*.html') //./*.html
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
});


gulp.task('buildJs', function() {
  return gulp.src('./src/js/*.js')
    .pipe(errorHandler(logError))
    .pipe(uglify())
    .pipe(concat('main.js')) 
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream())
});

gulp.task('browserSync', function() {
   browserSync.init({
     server:{
        baseDir: 'dist'
     }
   })
});

gulp.task('watch', ['browserSync','css', 'buildJs'], function() {
  gulp.watch('./src/sass/**/*.scss', ['css']); 
  gulp.watch('./src/js/*.js', ['buildJs']); 
  gulp.watch('./src/*.html', ['copy']);  
});