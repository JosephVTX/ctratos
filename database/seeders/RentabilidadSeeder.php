<?php

namespace Database\Seeders;

use App\Models\Rentabilidad;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RentabilidadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Rentabilidad::insert([
            [
                'porcentaje' => 8,
                'tipo_contrato_id' => 1,
            ],

            [

                'porcentaje' => 10,
                'tipo_contrato_id' => 1,
            ],

            [

                'porcentaje' => 15,
                'tipo_contrato_id' => 1,
            ],

            [

                'porcentaje' => 20,
                'tipo_contrato_id' => 1,
            ],




            [
                'porcentaje' => 25,
                'tipo_contrato_id' => 2,
            ],

            [

                'porcentaje' => 77,
                'tipo_contrato_id' => 2,
            ],

            [

                'porcentaje' => 71.5,
                'tipo_contrato_id' => 2,
            ],

            [

                'porcentaje' => 66,
                'tipo_contrato_id' => 2,
            ],
            [

                'porcentaje' => 66,
                'tipo_contrato_id' => 2,
            ],
            [

                'porcentaje' => 50,
                'tipo_contrato_id' => 2,
            ],

            [

                'porcentaje' => 40,
                'tipo_contrato_id' => 2,

            ],
            [

                'porcentaje' => 35,
                'tipo_contrato_id' => 2,

            ],
            [

                'porcentaje' => 30,
                'tipo_contrato_id' => 2,

            ],
            [

                'porcentaje' => 27.5,
                'tipo_contrato_id' => 2,

            ],
            [

                'porcentaje' => 110,
                'tipo_contrato_id' => 2,

            ],

        ]);
    }
}
