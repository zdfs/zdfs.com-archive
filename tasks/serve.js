var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', [
	'clean-styles',
	'clean-scripts',
	'sass',
	'cssnano',
	'concat-scripts',
	'uglify'
], function () {

	var files = [
		'./html/assets/scss/**/*.scss',
		'./craft/templates/**/*.twig',
		'./html/assets/js/*.js'
	];

	browserSync.init(files, {
		proxy: {
			target: 'https://zdfs.dev'
		},
		https: true,
		port: 8080,
		host: 'zdfs.dev',
		open: false,
		notify: false
	});

	gulp.watch('./craft/templates/**/*.twig', browserSync.reload);
	gulp.watch('./html/assets/scss/**/*.scss', ['sass', 'cssnano', browserSync.reload]);
	gulp.watch('./html/assets/js/*.js', ['clean-scripts', 'concat-scripts', 'uglify', browserSync.reload]);

});
