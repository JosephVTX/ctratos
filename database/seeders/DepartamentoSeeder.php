<?php

namespace Database\Seeders;

use App\Models\Departamento;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Departamento::insert([
            ['nombre' => 'Lima'],
            ['nombre' => 'Arequipa'],
            ['nombre' => 'Cusco'],
            ['nombre' => 'Puno'],
            ['nombre' => 'Tacna'],
            ['nombre' => 'Moquegua'],
            ['nombre' => 'Madre de Dios'],
            ['nombre' => 'Ica'],
            ['nombre' => 'Loreto'],
            ['nombre' => 'Ucayali'],
            ['nombre' => 'San Martin'],
            ['nombre' => 'Amazonas'],
            ['nombre' => 'Cajamarca'],
            ['nombre' => 'La Libertad'],
            ['nombre' => 'Ancash'],
            ['nombre' => 'Piura'],
            ['nombre' => 'Tumbes'],
            ['nombre' => 'Lambayeque'],
            ['nombre' => 'Junin'],
            ['nombre' => 'Pasco'],
            ['nombre' => 'Ayacucho'],
            ['nombre' => 'Apurimac'],
            ['nombre' => 'Huancavelica']
        ]);
    }
}
