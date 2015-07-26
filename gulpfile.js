var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload');
	autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', function() {
	connect.server({livereload: true});
});

gulp.task('prefix', function () {
    return gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('stylus', function() {
	gulp.src('stylus/main.styl')
		.pipe(stylus({compress:true}))
		.pipe(livereload())
		.pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('stylus/main.styl', ['stylus'])
	gulp.watch('*.html', ['html'])
});

gulp.task('html', function () {
	gulp.src('*.html')
	.pipe(livereload());
});
	
gulp.task('app', ['stylus', 'watch', 'serve', 'prefix']);