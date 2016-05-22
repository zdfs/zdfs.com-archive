'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', [
	'concat-scripts'
], function () {

	return gulp
		.src('./html/scripts/src/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./html/scripts/min'));

});