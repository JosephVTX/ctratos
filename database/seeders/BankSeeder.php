<?php

namespace Database\Seeders;

use App\Models\Bank;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Bank::insert([
            [
                'name' => 'Banco de crédito del Perú - BCP',
            ],
            [
                'name' => 'Banco Interbank',
            ],
            [
                'name' => 'Banco de la Nación',
            ],
            [
                'name' => 'Banco Pichincha',
            ],
            [
                'name' => 'Banco Ripley',
            ],

            [
                'name' => 'Banco Scotiabank',
            ],

            [
                'name' => 'Banco Falabella',
            ],
            [
                'name' => 'Banco BBVA Perú',
            ]
        ]);
    }
}
