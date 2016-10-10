var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var notify = require('gulp-notify');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulpIf = require('gulp-if');

var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('bower', function(jsOutputFile, jsOutputFolder, cssOutputFile, cssOutputFolder) {

	var cssFile = cssOutputFile || 'vendor.css';
	var jsFile = jsOutputFile || 'vendor.js';

	var onError = function (err) {
		this.emit('end');
	};


	new Task('bower-js', function() {
		return gulp.src(mainBowerFiles())
			.on('error', onError)
			.pipe(filter('**/*.js'))
			.pipe(concat(jsFile))
			.pipe(uglify({preserveComments: false, mangle: false}))
			.pipe(gulp.dest(jsOutputFolder || Elixir.config.js.outputFolder));
	}).watch('bower.json');


	new Task('bower-css', function(){
		return gulp.src(mainBowerFiles())
			.on('error', onError)
			.pipe(filter('**/*.css'))
			.pipe(concat(cssFile))
			.pipe(cssnano({
				safe: true,
				discardComments: {
					removeAll: true
				},
				colormin: true
			}))
			.pipe(gulp.dest(cssOutputFolder || config.css.outputFolder));
	}).watch('bower.json');

});
