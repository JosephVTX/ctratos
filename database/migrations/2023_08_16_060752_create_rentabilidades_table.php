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
        Schema::create('rentabilidades', function (Blueprint $table) {
            $table->id();
            $table->string('porcentaje');
            $table->foreignId('tipo_contrato_id')->constrained('tipo_contratos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rentabilidades');
    }
};
