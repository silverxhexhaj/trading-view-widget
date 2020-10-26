<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['api', 'cors'])->group(function () {
    Route::get('lorem', function () {
        return [
            'ipsum' => 'dolor',
        ];
    });
});
