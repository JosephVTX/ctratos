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
            $table->id();
            $table->string('nombres');
            $table->string('apellidos');
            $table->string('tipo_doc');
            $table->string('numero_doc');
            $table->string('departamento');
            $table->string('provincia');
            $table->string('distrito');
            $table->string('direccion');
            $table->string('correo');
            $table->string('celular');
            $table->string('genero');
            $table->string('ocupacion');
            $table->string('tipo_contrato');
            $table->string('rentabilidad');
            $table->string('vigencia_contrato');
            $table->string('moneda');
            $table->string('capital');
            $table->string('fecha_inicio');
            $table->string('fecha_fin');
            $table->string('banco_cliente');
            $table->string('tipo_cuenta_cliente');
            $table->string('numero_cuenta_cliente');
            $table->string('numero_cci_cliente');
            $table->string('numero_cuenta_gjg');
            $table->string('nombre_cuenta_gjg');
            $table->string('dni_anverso');
            $table->string('dni_reverso');
            $table->string('declaracion_jurada');
            $table->string('sustento_declaracion_jurada');
            $table->string('comprobantes_pago');

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
