var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('images', function(images) {

    new Task('min-images', function() {
    return gulp.src(images)
        .pipe(imagemin())
        .pipe(gulp.dest(Elixir.config.images.outputFolder));
    });

});
