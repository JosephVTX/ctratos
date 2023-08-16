<?php

namespace Database\Seeders;

use App\Models\Profit;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Profit::insert([
            [
                'percent' => 8,
                'contract_type_id' => 1,
            ],

            [

                'percent' => 10,
                'contract_type_id' => 1,
            ],

            [

                'percent' => 15,
                'contract_type_id' => 1,
            ],

            [

                'percent' => 20,
                'contract_type_id' => 1,
            ],




            [
                'percent' => 25,
                'contract_type_id' => 2,
            ],

            [

                'percent' => 77,
                'contract_type_id' => 2,
            ],

            [

                'percent' => 71.5,
                'contract_type_id' => 2,
            ],

            [

                'percent' => 66,
                'contract_type_id' => 2,
            ],
            [

                'percent' => 66,
                'contract_type_id' => 2,
            ],
            [

                'percent' => 50,
                'contract_type_id' => 2,
            ],

            [

                'percent' => 40,
                'contract_type_id' => 2,

            ],
            [

                'percent' => 35,
                'contract_type_id' => 2,

            ],
            [

                'percent' => 30,
                'contract_type_id' => 2,

            ],
            [

                'percent' => 27.5,
                'contract_type_id' => 2,

            ],
            [

                'percent' => 110,
                'contract_type_id' => 2,

            ],

        ]);
    }
}
