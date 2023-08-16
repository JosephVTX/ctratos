<?php

namespace Database\Seeders;

use App\Models\Departament;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartamentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Departament::insert([
            ['name' => 'Lima'],
            ['name' => 'Arequipa'],
            ['name' => 'Cusco'],
            ['name' => 'Puno'],
            ['name' => 'Tacna'],
            ['name' => 'Moquegua'],
            ['name' => 'Madre de Dios'],
            ['name' => 'Ica'],
            ['name' => 'Loreto'],
            ['name' => 'Ucayali'],
            ['name' => 'San Martin'],
            ['name' => 'Amazonas'],
            ['name' => 'Cajamarca'],
            ['name' => 'La Libertad'],
            ['name' => 'Ancash'],
            ['name' => 'Piura'],
            ['name' => 'Tumbes'],
            ['name' => 'Lambayeque'],
            ['name' => 'Junin'],
            ['name' => 'Pasco'],
            ['name' => 'Ayacucho'],
            ['name' => 'Apurimac'],
            ['name' => 'Huancavelica']
        ]);
    }
}
