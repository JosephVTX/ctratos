<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contrato>
 */
class ContratoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {   

        /* 
        
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
            $table->json('declaracion_jurada');
            $table->json('sustento_declaracion_jurada');
            $table->json('comprobantes_pago');
        */
        return [
            //
            'user_id' => $this->faker->numberBetween(1, 10),
            'area_id' => $this->faker->numberBetween(1, 10),
            'nombres' => $this->faker->name(),
            'apellidos' => $this->faker->lastName(),
            'tipo_doc' => $this->faker->randomElement(['DNI', 'CE', 'RUC']),
            'numero_doc' => $this->faker->randomNumber(8),
            'departamento' => [
                'id' => $this->faker->randomNumber(2),
                'nombre' => $this->faker->randomElement(['LIMA', 'ICA', 'AREQUIPA']),
            ],
            'provincia' => [
                'id' => $this->faker->randomNumber(2),
                'nombre' => $this->faker->randomElement(['LIMA', 'ICA', 'AREQUIPA']),
            ],
            'distrito' => $this->faker->randomElement(['LIMA', 'ICA', 'AREQUIPA']),
            'direccion' => $this->faker->address(),
            'correo' => $this->faker->email(),
            'celular' => '936' . $this->faker->randomNumber(6), // '936' . '123456
            'genero' => $this->faker->randomElement(['masculino', 'femenino']),
            'ocupacion' => $this->faker->randomElement(['EMPLEADO', 'INDEPENDIENTE']),
            'tipo_contrato' => $this->faker->randomElement(['Corto Plazo', 'Mediano Plazo']),
            'rentabilidad' => [
                'id' => $this->faker->randomNumber(2),
                'porcentaje' => $this->faker->randomNumber(2),
                
            ],

            'vigencia_contrato' => [
                'id' => $this->faker->randomNumber(2),
                'cantidad' => $this->faker->randomNumber(2),
                'unidad' => $this->faker->randomElement(['días', 'meses']),
                'rentabilidad_id' => $this->faker->randomNumber(2),
            ],
            'moneda' => $this->faker->randomElement(['S/', '$']),
            'capital' => $this->faker->randomNumber(8),
            'fecha_inicio' => $this->faker->date(),
            'fecha_fin' => $this->faker->date(),
            'banco_cliente' => $this->faker->randomElement(['BCP', 'BBVA']),
            'tipo_cuenta_cliente' => $this->faker->randomElement(['ahorro', 'corriente']),
            'numero_cuenta_cliente' => $this->faker->randomNumber(8),
            'numero_cci_cliente' => $this->faker->randomNumber(8),
            'banco_gjg' => [
                'nombre' => ["Banco de Credito del Peru", "Banco de la Nacion", "Banco Interbank", "Banco Continental"],
                'cuenta' => $this->faker->randomNumber(8),
            ],
            'dni_anverso' => $this->faker->imageUrl(),
            'dni_reverso' => $this->faker->imageUrl(),
            'declaracion_jurada' => [
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
            ],
            'sustento_declaracion_jurada' => [
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
            ],

            'comprobantes_pago' => [
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
                $this->faker->imageUrl(),
            ],
            
        ];
    }
}
