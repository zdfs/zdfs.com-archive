'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-scripts', function() {

	return gulp
		.src([
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/foundation-sites/dist/foundation.js',
			'./node_modules/picturefill/dist/picturefill.js',
			'./node_modules/lightgallery/dist/js/lightgallery-all.js',
			'./html/assets/js/typekit.js',
			'./html/assets/js/headroom.js',
			'./html/assets/js/svgInjector.js',
			'./html/assets/js/init.js'
		])
		.pipe(concat('common.js'))
		.pipe(gulp.dest('./html/scripts/src'));

});