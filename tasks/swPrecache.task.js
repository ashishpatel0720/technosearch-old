var path = require('path');
var swPrecache = require('sw-precache');

var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('swPrecache', function() {

    new Task('generate-service-worker', function() {
        delete require.cache[require.resolve('./../precache-config.json')]
        var preCacheConfig = require('./../precache-config.json');
        return swPrecache.write(path.join('public', 'service-worker.js'), preCacheConfig);
    }).watch(['public/build/rev-manifest.json', 'precache-config.json']);

});
