var gulp = require('gulp');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var gulpif = require('gulp-if');

var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.config.js');

var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('angular', function(src, output, outputFilename) {

	var baseDir = src || Elixir.config.assetsPath + '/angular/';

	new Task('angular in ' + baseDir, function() {
		return gulp.src([baseDir + "index.main.js", baseDir + "**/*.*.js"])
			.pipe(webpack(webpackConfig))
			.pipe(uglify({preserveComments: false, mangle: false}))
			.pipe(gulp.dest(output || config.js.outputFolder));
	}).watch(baseDir + '/**/*.js');

});
