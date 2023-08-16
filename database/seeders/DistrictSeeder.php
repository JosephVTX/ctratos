<?php

namespace Database\Seeders;

use App\Models\District;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        

        District::insert([

            //ALL DISTRICT PROVINCE LIMA

            ['name' => 'Lima', 'province_id' => 1],
            ['name' => 'Ancón', 'province_id' => 1],
            ['name' => 'Ate', 'province_id' => 1],
            ['name' => 'Barranco', 'province_id' => 1],
            ['name' => 'Breña', 'province_id' => 1],
            ['name' => 'Carabayllo', 'province_id' => 1],
            ['name' => 'Chaclacayo', 'province_id' => 1],
            ['name' => 'Chorrillos', 'province_id' => 1],
            ['name' => 'Cieneguilla', 'province_id' => 1],
            ['name' => 'Comas', 'province_id' => 1],
            ['name' => 'El Agustino', 'province_id' => 1],
            ['name' => 'Independencia', 'province_id' => 1],
            ['name' => 'Jesús María', 'province_id' => 1],
            ['name' => 'La Molina', 'province_id' => 1],
            ['name' => 'La Victoria', 'province_id' => 1],
            ['name' => 'Lince', 'province_id' => 1],
            ['name' => 'Los Olivos', 'province_id' => 1],
            ['name' => 'Lurigancho', 'province_id' => 1],
            ['name' => 'Lurín', 'province_id' => 1],
            ['name' => 'Magdalena del Mar', 'province_id' => 1],
            ['name' => 'Miraflores', 'province_id' => 1],
            ['name' => 'Pachacamac', 'province_id' => 1],
            ['name' => 'Pucusana', 'province_id' => 1],
            ['name' => 'Pueblo Libre', 'province_id' => 1],
            ['name' => 'Puente Piedra', 'province_id' => 1],
            ['name' => 'Punta Hermosa', 'province_id' => 1],
            ['name' => 'Punta Negra', 'province_id' => 1]
        
        
            //ALL DISTRICT PROVINCE BARRANCA

            ,['name' => 'Barranca', 'province_id' => 2],
            ['name' => 'Paramonga', 'province_id' => 2],
            ['name' => 'Pativilca', 'province_id' => 2],
            ['name' => 'Supe', 'province_id' => 2],
            ['name' => 'Supe Puerto', 'province_id' => 2]


            //ALL DISTRICT PROVINCE CAJATAMBO

            ,['name' => 'Cajatambo', 'province_id' => 3],
            ['name' => 'Copa', 'province_id' => 3],
            ['name' => 'Gorgor', 'province_id' => 3],
            ['name' => 'Huancapon', 'province_id' => 3],
            ['name' => 'Manas', 'province_id' => 3]

            //ALL DISTRICT PROVINCE CANTA

            ,['name' => 'Canta', 'province_id' => 4],
            ['name' => 'Arahuay', 'province_id' => 4],
            ['name' => 'Huamantanga', 'province_id' => 4],
            ['name' => 'Huaros', 'province_id' => 4],
            ['name' => 'Lachaqui', 'province_id' => 4],
            ['name' => 'San Buenaventura', 'province_id' => 4],
            ['name' => 'Santa Rosa de Quives', 'province_id' => 4]
        ]);

        
    }
}
