<?php

namespace App\Providers;

use App\Models\User;
use App\Policies\UserPolicy;
use Illuminate\Support\ServiceProvider;
use Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */

    /* protected $policies = [
        User::class => UserPolicy::class,
    ]; */
    
    public function register(): void
    {
        //
        
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //

        Validator::extend('same_length', function ($attribute, $value, $parameters, $validator) {
            $otherField = $parameters[0];

            return strlen($value) === strlen($validator->getData()[$otherField]);
        });
    }
}
