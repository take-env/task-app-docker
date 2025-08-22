<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json(['ok' => true, 'route' => 'test']);
});

Route::get   ('/tasks',          [TaskController::class, 'index']);
Route::post  ('/tasks',          [TaskController::class, 'store']);
Route::get   ('/tasks/{task}',   [TaskController::class, 'show']);
Route::put   ('/tasks/{task}',   [TaskController::class, 'update']);
Route::delete('/tasks/{task}',   [TaskController::class, 'destroy']);

