<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TipoContratoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        \App\Models\TipoContrato::insert([
            [
                'nombre' => 'Corto Plazo',
                'descripcion' => 'Contrato de corto plazo',
            ],
            [
                'nombre' => 'Mediano Plazo',
                'descripcion' => 'Contrato de mediano plazo',
            ]

        ]);
    }
}
