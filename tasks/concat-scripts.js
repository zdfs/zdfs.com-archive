'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-scripts', function() {

		return gulp
			.src([
				'./node_modules/jquery/dist/jquery.js',
				'./node_modules/foundation-sites/dist/foundation.js',
				'./html/js/typekit.js',
				'./html/js/headroom.js',
				'./html/js/svgInjector.js',
				'./html/js/init.js'
			])
			.pipe(concat('common.js'))
			.pipe(gulp.dest('./html/scripts/src'));

	});