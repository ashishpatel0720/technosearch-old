<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'AngularController@serveApp');

    Route::get('/godmode','AdminController@index')->middleware('auth.basic');

    Route::get('/unsupported-browser', 'AngularController@unsupported');

    Route::get('/{all}', 'AngularController@serveApp');
});

//public API routes
$api->group(['middleware' => ['api']], function ($api) {

    $api->get('team', 'TeamController@getTeam');

    $api->get('event/{slug}', 'EventController@getEvent');
    $api->get('events', 'EventController@getEvents');

    $api->post('addevent','EventController@addEvent');
    $api->post('contact','MainController@saveMessage');

});

//protected API routes with JWT (must be logged in)
$api->group(['middleware' => ['api', 'api.auth']], function ($api) {

});
