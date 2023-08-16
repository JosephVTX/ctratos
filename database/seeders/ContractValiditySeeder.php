<?php

namespace Database\Seeders;

use App\Models\ContractValidity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContractValiditySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        ContractValidity::insert([
            [
                'quantity' => 45,
                'unit' => 'day',
                'profit_id' => 1,
            ],
            [
                'quantity' => 55,
                'unit' => 'day',
                'profit_id' => 2,
            ],
            [
                'quantity' => 45,
                'unit' => 'day',
                'profit_id' => 3,
            ],
            [
                'quantity' => 55,
                'unit' => 'day',
                'profit_id' => 4,
            ],



            [
                'quantity' => 6,
                'unit' => 'month',
                'profit_id' => 5,
            ],
            [
                'quantity' => 12,
                'unit' => 'month',
                'profit_id' => 6,
            ],
            [
                'quantity' => 12,
                'unit' => 'month',
                'profit_id' => 7,
            ],
            [
                'quantity' => 12,
                'unit' => 'month',
                'profit_id' => 8,
            ],
            [
                'quantity' => 6,
                'unit' => 'month',
                'profit_id' => 9,
            ],
            [
                'quantity' => 6,
                'unit' => 'month',
                'profit_id' => 10,
            ],
            [
                'quantity' => 6,
                'unit' => 'month',
                'profit_id' => 11,
            ],
            [
                'quantity' => 6,
                'unit' => 'month',
                'profit_id' => 12,
            ],
            [
                'quantity' => 6,
                'unit' => 'month',
                'profit_id' => 13,
            ],
            [
                'quantity' => 12,
                'unit' => 'month',
                'profit_id' => 14,
            ],

        ]);
    }
}
