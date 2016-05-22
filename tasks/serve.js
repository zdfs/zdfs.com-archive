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
		'./html/scss/**/*.scss',
		'./craft/templates/**/*.twig',
		'./html/js/**/*.js'
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
	gulp.watch('./html/scss/*.scss', ['sass', 'cssnano']);
	gulp.watch('./html/styles/min/*.css').on('change', browserSync.reload);
	gulp.watch('./html/js/*.js', ['clean-scripts', 'concat-scripts', 'uglify']);
	gulp.watch('./html/scripts/min/*.js', browserSync.reload);

});
