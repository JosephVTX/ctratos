<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->softDeletes();
            $table->id();
            $table->string('name');
            $table->string("username", 32)->unique();
            $table->string('email')->unique();
            $table->string('codigo', 8)->nullable()->unique();
            $table->enum('estado', ['Activo', 'Inactivo'])->default('Activo');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
