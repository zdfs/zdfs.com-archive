'use strict';

var gulp = require('gulp');
var cssnano = require('gulp-cssnano');

gulp.task('cssnano', ['sass'], function () {

	return gulp
		.src('./html/styles/src/**/*.css')
		.pipe(cssnano({safe: true}))
		.pipe(gulp.dest('./html/styles/min'));

});