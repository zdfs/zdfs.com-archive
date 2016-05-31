'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {

	return gulp
		.src(['./html/assets/scss/**/*.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: [
				'./node_modules/foundation-sites/scss',
				'./node_modules/Suit/node_modules/motion-ui/src',
				'./node_modules/sass-toolkit/stylesheets'
			]
		}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./html/styles/src'));

});