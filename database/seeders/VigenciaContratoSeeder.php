<?php

namespace Database\Seeders;

use App\Models\VigenciaContrato;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VigenciaContratoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        VigenciaContrato::insert([
            [
                'cantidad' => 45,
                'unidad' => 'dias',
                'rentabilidad_id' => 1,
            ],
            [
                'cantidad' => 55,
                'unidad' => 'dias',
                'rentabilidad_id' => 2,
            ],
            [
                'cantidad' => 45,
                'unidad' => 'dias',
                'rentabilidad_id' => 3,
            ],
            [
                'cantidad' => 55,
                'unidad' => 'dias',
                'rentabilidad_id' => 4,
            ],



            [
                'cantidad' => 6,
                'unidad' => 'meses',
                'rentabilidad_id' => 5,
            ],
            [
                'cantidad' => 12,
                'unidad' => 'meses',
                'rentabilidad_id' => 6,
            ],
            [
                'cantidad' => 12,
                'unidad' => 'meses',
                'rentabilidad_id' => 7,
            ],
            [
                'cantidad' => 12,
                'unidad' => 'meses',
                'rentabilidad_id' => 8,
            ],
            [
                'cantidad' => 6,
                'unidad' => 'meses',
                'rentabilidad_id' => 9,
            ],
            [
                'cantidad' => 6,
                'unidad' => 'meses',
                'rentabilidad_id' => 10,
            ],
            [
                'cantidad' => 6,
                'unidad' => 'meses',
                'rentabilidad_id' => 11,
            ],
            [
                'cantidad' => 6,
                'unidad' => 'meses',
                'rentabilidad_id' => 12,
            ],
            [
                'cantidad' => 6,
                'unidad' => 'meses',
                'rentabilidad_id' => 13,
            ],
            [
                'cantidad' => 12,
                'unidad' => 'meses',
                'rentabilidad_id' => 14,
            ],

        ]);
    }
}
