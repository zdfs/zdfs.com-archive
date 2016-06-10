'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-scripts', function() {

	return gulp
		.src([
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/foundation-sites/dist/plugins/foundation.core.js',
      './node_modules/foundation-sites/dist/plugins/foundation.util.mediaQuery.js',
      './node_modules/fg-loadcss/src/loadCSS.js',
      './node_modules/fg-loadcss/src/cssrelpreload.js',
			'./node_modules/picturefill/dist/picturefill.js',
			'./node_modules/lightgallery/dist/js/lightgallery-all.js',
			'./html/assets/js/typekit.js',
			'./html/assets/js/headroom.js',
			'./html/assets/js/init.js'
		])
		.pipe(concat('common.js'))
		.pipe(gulp.dest('./html/scripts/src'));

});