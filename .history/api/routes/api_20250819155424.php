<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json(['ok' => true, 'route' => 'test']);
});