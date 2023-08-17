<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartamentoSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        DB::table('departamentos')->insert(array (
            0 => 
            array (
                'id' => '01',
                'nombre' => 'Amazonas',
            ),
            1 => 
            array (
                'id' => '02',
                'nombre' => 'Áncash',
            ),
            2 => 
            array (
                'id' => '03',
                'nombre' => 'Apurímac',
            ),
            3 => 
            array (
                'id' => '04',
                'nombre' => 'Arequipa',
            ),
            4 => 
            array (
                'id' => '05',
                'nombre' => 'Ayacucho',
            ),
            5 => 
            array (
                'id' => '06',
                'nombre' => 'Cajamarca',
            ),
            6 => 
            array (
                'id' => '07',
                'nombre' => 'Callao',
            ),
            7 => 
            array (
                'id' => '08',
                'nombre' => 'Cusco',
            ),
            8 => 
            array (
                'id' => '09',
                'nombre' => 'Huancavelica',
            ),
            9 => 
            array (
                'id' => '10',
                'nombre' => 'Huánuco',
            ),
            10 => 
            array (
                'id' => '11',
                'nombre' => 'Ica',
            ),
            11 => 
            array (
                'id' => '12',
                'nombre' => 'Junín',
            ),
            12 => 
            array (
                'id' => '13',
                'nombre' => 'La Libertad',
            ),
            13 => 
            array (
                'id' => '14',
                'nombre' => 'Lambayeque',
            ),
            14 => 
            array (
                'id' => '15',
                'nombre' => 'Lima',
            ),
            15 => 
            array (
                'id' => '16',
                'nombre' => 'Loreto',
            ),
            16 => 
            array (
                'id' => '17',
                'nombre' => 'Madre de Dios',
            ),
            17 => 
            array (
                'id' => '18',
                'nombre' => 'Moquegua',
            ),
            18 => 
            array (
                'id' => '19',
                'nombre' => 'Pasco',
            ),
            19 => 
            array (
                'id' => '20',
                'nombre' => 'Piura',
            ),
            20 => 
            array (
                'id' => '21',
                'nombre' => 'Puno',
            ),
            21 => 
            array (
                'id' => '22',
                'nombre' => 'San Martín',
            ),
            22 => 
            array (
                'id' => '23',
                'nombre' => 'Tacna',
            ),
            23 => 
            array (
                'id' => '24',
                'nombre' => 'Tumbes',
            ),
            24 => 
            array (
                'id' => '25',
                'nombre' => 'Ucayali',
            ),
        ));
        
        
    }
}