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



        Schema::create('contratos', function (Blueprint $table) {
            $table->id()->from(1000);
            $table->foreignId('user_id')->constrained();
            $table->foreignId('area_id')->constrained();
            $table->string('nombres', 64);
            $table->string('apellidos', 64);
            $table->string('tipo_doc', 8);
            $table->string('numero_doc', 16);
            $table->json('departamento', 32);
            $table->json('provincia', 64);
            $table->string('distrito', 64);
            $table->string('direccion', 128);
            $table->string('correo', 128);
            $table->string('celular', 12);
            $table->string('genero', 16);
            $table->string('ocupacion', 128);
            $table->string('tipo_contrato', 32);
            $table->json('rentabilidad');
            $table->json('vigencia_contrato');
            $table->string('moneda', 16);
            $table->string('capital', 16);
            $table->string('fecha_inicio', 16);
            $table->string('fecha_fin', 16);
            $table->string('banco_cliente', 32);
            $table->string('tipo_cuenta_cliente', 32);
            $table->string('numero_cuenta_cliente', 32);
            $table->string('numero_cci_cliente', 32);
            $table->string('dni_anverso');
            $table->string('dni_reverso');
            $table->json('banco_gjg');
            $table->json('declaracion_jurada');
            $table->json('sustento_declaracion_jurada');
            $table->json('comprobantes_pago');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contratos');
    }
};
