'use strict';

var gulp = require('gulp');

require('require-dir')('./tasks');

gulp.task(
	'build',
	[
		'clean-scripts',
		'clean-styles',
		'sass'
	]
);