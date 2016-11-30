var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var jsFiles = 'assets/javascripts/**/*.js',
  jsDest = 'assets';

var cssFiles = 'assets/stylesheets/**/*.css',
  cssDest = 'assets';

gulp.task('scripts', function() {
  return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(rename('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

gulp.task('styles', function() {
  return gulp.src(cssFiles)
    .pipe(minifyCSS())
    .pipe(concat('bundle.min.css'))
    .pipe(gulp.dest(cssDest));
});

gulp.task('default', ['scripts', 'styles'])
