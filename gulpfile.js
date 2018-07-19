var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('server', function() {
	gulp.src('app/').pipe(
		server({
			livereload: true,
			open: true,
			port: '3333'
		})
	);
});

gulp.task('default', ['server']);
