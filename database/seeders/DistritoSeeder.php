<?php

namespace Database\Seeders;

use App\Models\Distrito;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DistritoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Distrito::insert([

            //ALL DISTRICT PROVINCE LIMA

            ['nombre' => 'Lima', 'provincia_id' => 1],
            ['nombre' => 'Ancón', 'provincia_id' => 1],
            ['nombre' => 'Ate', 'provincia_id' => 1],
            ['nombre' => 'Barranco', 'provincia_id' => 1],
            ['nombre' => 'Breña', 'provincia_id' => 1],
            ['nombre' => 'Carabayllo', 'provincia_id' => 1],
            ['nombre' => 'Chaclacayo', 'provincia_id' => 1],
            ['nombre' => 'Chorrillos', 'provincia_id' => 1],
            ['nombre' => 'Cieneguilla', 'provincia_id' => 1],
            ['nombre' => 'Comas', 'provincia_id' => 1],
            ['nombre' => 'El Agustino', 'provincia_id' => 1],
            ['nombre' => 'Independencia', 'provincia_id' => 1],
            ['nombre' => 'Jesús María', 'provincia_id' => 1],
            ['nombre' => 'La Molina', 'provincia_id' => 1],
            ['nombre' => 'La Victoria', 'provincia_id' => 1],
            ['nombre' => 'Lince', 'provincia_id' => 1],
            ['nombre' => 'Los Olivos', 'provincia_id' => 1],
            ['nombre' => 'Lurigancho', 'provincia_id' => 1],
            ['nombre' => 'Lurín', 'provincia_id' => 1],
            ['nombre' => 'Magdalena del Mar', 'provincia_id' => 1],
            ['nombre' => 'Miraflores', 'provincia_id' => 1],
            ['nombre' => 'Pachacamac', 'provincia_id' => 1],
            ['nombre' => 'Pucusana', 'provincia_id' => 1],
            ['nombre' => 'Pueblo Libre', 'provincia_id' => 1],
            ['nombre' => 'Puente Piedra', 'provincia_id' => 1],
            ['nombre' => 'Punta Hermosa', 'provincia_id' => 1],
            ['nombre' => 'Punta Negra', 'provincia_id' => 1]
        
        
            //ALL DISTRICT PROVINCE BARRANCA

            ,['nombre' => 'Barranca', 'provincia_id' => 2],
            ['nombre' => 'Paramonga', 'provincia_id' => 2],
            ['nombre' => 'Pativilca', 'provincia_id' => 2],
            ['nombre' => 'Supe', 'provincia_id' => 2],
            ['nombre' => 'Supe Puerto', 'provincia_id' => 2]


            //ALL DISTRICT PROVINCE CAJATAMBO

            ,['nombre' => 'Cajatambo', 'provincia_id' => 3],
            ['nombre' => 'Copa', 'provincia_id' => 3],
            ['nombre' => 'Gorgor', 'provincia_id' => 3],
            ['nombre' => 'Huancapon', 'provincia_id' => 3],
            ['nombre' => 'Manas', 'provincia_id' => 3]

            //ALL DISTRICT PROVINCE CANTA

            ,['nombre' => 'Canta', 'provincia_id' => 4],
            ['nombre' => 'Arahuay', 'provincia_id' => 4],
            ['nombre' => 'Huamantanga', 'provincia_id' => 4],
            ['nombre' => 'Huaros', 'provincia_id' => 4],
            ['nombre' => 'Lachaqui', 'provincia_id' => 4],
            ['nombre' => 'San Buenaventura', 'provincia_id' => 4],
            ['nombre' => 'Santa Rosa de Quives', 'provincia_id' => 4]
        ]);
    }
}
