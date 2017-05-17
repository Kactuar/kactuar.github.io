'use strict'
const gulp  = require('gulp');
const less  = require('gulp-less');
const mqopt = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
	return gulp.src('src/less/{main,ie9}.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
            browsers: ['last 15 versions']
        }))
		.pipe(mqopt())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/css'))
});

