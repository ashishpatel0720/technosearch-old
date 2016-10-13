var elixir     = require('laravel-elixir');
elixir.config.sourcemaps = false;
elixir.config.production = true;
elixir.config.css.autoprefix = {
    enabled: true,
    options: {
        cascade: false,
        browsers: ['last 15 versions']
    }
};


require('./tasks/concatScripts.task.js');
require('./tasks/swPrecache.task.js');
require('./tasks/ngHtml2Js.task.js');
require('./tasks/angular.task.js');
require('./tasks/bower.task.js');
require('./tasks/image.task.js');

elixir(function(mix) {

    var assets = [
            'public/js/final.js',
            'public/css/final.css'
        ],
        scripts = [
            './public/js/vendor.js', './public/js/partials.js', './public/js/app.js'
        ],
        styles = [
            './public/css/vendor.css', './public/css/app.css'
        ],
        images = [
            './public/img/*','./public/img/**/*'
        ];

    mix
        .bower()
        .angular('./angular/')
        .ngHtml2Js('./angular/**/*.html')
        .concatScripts(scripts, 'final.js')
        .sass(['./angular/**/*.scss'], 'public/css')
        .styles(styles, './public/css/final.css')
        .images(images)
        .swPrecache();
});
