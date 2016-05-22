'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('clean-styles', function () {

	return del.sync([
		'./html/styles/**/*.css'
	]);

});

gulp.task('clean-scripts', function () {

	return del.sync([
		'./html/scripts/**/*.js'
	]);

});