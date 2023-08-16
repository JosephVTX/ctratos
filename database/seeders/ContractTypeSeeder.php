<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ContractTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        \App\Models\ContractType::insert([
            [
                'name' => 'Corto Plazo',
                'description' => 'Contrato de corto plazo',
            ],
            [
                'name' => 'Mediano Plazo',
                'description' => 'Contrato de mediano plazo',
            ]

        ]);
    }
}
