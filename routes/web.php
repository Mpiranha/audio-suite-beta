<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/library', function () {
    return view('library');
});
Route::get('/publish', function () {
    return view('publish');
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
