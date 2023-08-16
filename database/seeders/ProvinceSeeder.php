<?php

namespace Database\Seeders;

use App\Models\Province;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        //ALL PROVIMCE DEPARTAMENT LIMA
        Province::insert([
            [
                'name' => 'Lima',
                'departament_id' => 1,
            ],
            [
                'name' => 'Barranca',
                'departament_id' => 1,
            ],
            [
                'name' => 'Cajatambo',
                'departament_id' => 1,
            ],
            [
                'name' => 'Canta',
                'departament_id' => 1,
            ],
            [
                'name' => 'Cañete',
                'departament_id' => 1,
            ],
            [
                'name' => 'Huaral',
                'departament_id' => 1,
            ],
            [
                'name' => 'Huarochirí',
                'departament_id' => 1,
            ],
            [
                'name' => 'Huaura',
                'departament_id' => 1,
            ],
            [
                'name' => 'Oyón',
                'departament_id' => 1,
            ],
            [
                'name' => 'Yauyos',
                'departament_id' => 1,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT AREQUIPA

        Province::insert([
            [
                'name' => 'Arequipa',
                'departament_id' => 2,
            ],
            [
                'name' => 'Camaná',
                'departament_id' => 2,
            ],
            [
                'name' => 'Caravelí',
                'departament_id' => 2,
            ],
            [
                'name' => 'Castilla',
                'departament_id' => 2,
            ],
            [
                'name' => 'Caylloma',
                'departament_id' => 2,
            ],
            [
                'name' => 'Condesuyos',
                'departament_id' => 2,
            ],
            [
                'name' => 'Islay',
                'departament_id' => 2,
            ],
            [
                'name' => 'La Uniòn',
                'departament_id' => 2,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT CUSCO

        Province::insert([
            [
                'name' => 'Cusco',
                'departament_id' => 3,
            ],
            [
                'name' => 'Acomayo',
                'departament_id' => 3,
            ],
            [
                'name' => 'Anta',
                'departament_id' => 3,
            ],
            [
                'name' => 'Calca',
                'departament_id' => 3,
            ],
            [
                'name' => 'Canas',
                'departament_id' => 3,
            ],
            [
                'name' => 'Canchis',
                'departament_id' => 3,
            ],
            [
                'name' => 'Chumbivilcas',
                'departament_id' => 3,
            ],
            [
                'name' => 'Espinar',
                'departament_id' => 3,
            ],
            [
                'name' => 'La Convención',
                'departament_id' => 3,
            ],
            [
                'name' => 'Paruro',
                'departament_id' => 3,
            ],
            [
                'name' => 'Paucartambo',
                'departament_id' => 3,
            ],
            [
                'name' => 'Quispicanchi',
                'departament_id' => 3,
            ],
            [
                'name' => 'Urubamba',
                'departament_id' => 3,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT PUNO

        Province::insert([
            [
                'name' => 'Puno',
                'departament_id' => 4,
            ],
            [
                'name' => 'Azángaro',
                'departament_id' => 4,
            ],
            [
                'name' => 'Carabaya',
                'departament_id' => 4,
            ],
            [
                'name' => 'Chucuito',
                'departament_id' => 4,
            ],
            [
                'name' => 'El Collao',
                'departament_id' => 4,
            ],
            [
                'name' => 'Huancané',
                'departament_id' => 4,
            ],
            [
                'name' => 'Lampa',
                'departament_id' => 4,
            ],
            [
                'name' => 'Melgar',
                'departament_id' => 4,
            ],
            [
                'name' => 'Moho',
                'departament_id' => 4,
            ],
            [
                'name' => 'San Antonio de Putina',
                'departament_id' => 4,
            ],
            [
                'name' => 'San Román',
                'departament_id' => 4,
            ],
            [
                'name' => 'Sandia',
                'departament_id' => 4,
            ],
            [
                'name' => 'Yunguyo',
                'departament_id' => 4,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT TACNA

        Province::insert([
            [
                'name' => 'Tacna',
                'departament_id' => 5,
            ],
            [
                'name' => 'Candarave',
                'departament_id' => 5,
            ],
            [
                'name' => 'Jorge Basadre',
                'departament_id' => 5,
            ],
            [
                'name' => 'Tarata',
                'departament_id' => 5,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT MOQUEGUA

        Province::insert([
            [
                'name' => 'Mariscal Nieto',
                'departament_id' => 6,
            ],
            [
                'name' => 'General Sánchez Cerro',
                'departament_id' => 6,
            ],
            [
                'name' => 'Ilo',
                'departament_id' => 6,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT MADRE DE DIOS

        Province::insert([
            [
                'name' => 'Tambopata',
                'departament_id' => 7,
            ],
            [
                'name' => 'Manu',
                'departament_id' => 7,
            ],
            [
                'name' => 'Tahuamanu',
                'departament_id' => 7,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT ICA

        Province::insert([
            [
                'name' => 'Ica',
                'departament_id' => 8,
            ],
            [
                'name' => 'Chincha',
                'departament_id' => 8,
            ],
            [
                'name' => 'Nazca',
                'departament_id' => 8,
            ],
            [
                'name' => 'Palpa',
                'departament_id' => 8,
            ],
            [
                'name' => 'Pisco',
                'departament_id' => 8,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT LORETO

        Province::insert([
            [
                'name' => 'Maynas',
                'departament_id' => 9,
            ],
            [
                'name' => 'Alto Amazonas',
                'departament_id' => 9,
            ],
            [
                'name' => 'Loreto',
                'departament_id' => 9,
            ],
            [
                'name' => 'Mariscal Ramón Castilla',
                'departament_id' => 9,
            ],
            [
                'name' => 'Requena',
                'departament_id' => 9,
            ],
            [
                'name' => 'Ucayali',
                'departament_id' => 9,
            ],
            [
                'name' => 'Datem del Marañón',
                'departament_id' => 9,
            ],
            [
                'name' => 'Putumayo',
                'departament_id' => 9,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT UCAYALI

        Province::insert([
            [
                'name' => 'Coronel Portillo',
                'departament_id' => 10,
            ],
            [
                'name' => 'Atalaya',
                'departament_id' => 10,
            ],
            [
                'name' => 'Padre Abad',
                'departament_id' => 10,
            ],
            [
                'name' => 'Purús',
                'departament_id' => 10,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT SAN MARTIN

        Province::insert([
            [
                'name' => 'Moyobamba',
                'departament_id' => 11,
            ],
            [
                'name' => 'Bellavista',
                'departament_id' => 11,
            ],
            [
                'name' => 'El Dorado',
                'departament_id' => 11,
            ],
            [
                'name' => 'Huallaga',
                'departament_id' => 11,
            ],
            [
                'name' => 'Lamas',
                'departament_id' => 11,
            ],
            [
                'name' => 'Mariscal Cáceres',
                'departament_id' => 11,
            ],
            [
                'name' => 'Picota',
                'departament_id' => 11,
            ],
            [
                'name' => 'Rioja',
                'departament_id' => 11,
            ],
            [
                'name' => 'San Martín',
                'departament_id' => 11,
            ],
            [
                'name' => 'Tocache',
                'departament_id' => 11,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT AMAZONAS

        Province::insert([
            [
                'name' => 'Chachapoyas',
                'departament_id' => 12,
            ],
            [
                'name' => 'Bagua',
                'departament_id' => 12,
            ],
            [
                'name' => 'Bongará',
                'departament_id' => 12,
            ],
            [
                'name' => 'Condorcanqui',
                'departament_id' => 12,
            ],
            [
                'name' => 'Luya',
                'departament_id' => 12,
            ],
            [
                'name' => 'Rodríguez de Mendoza',
                'departament_id' => 12,
            ],
            [
                'name' => 'Utcubamba',
                'departament_id' => 12,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT CAJAMARCA

        Province::insert([
            [
                'name' => 'Cajamarca',
                'departament_id' => 13,
            ],
            [
                'name' => 'Cajabamba',
                'departament_id' => 13,
            ],
            [
                'name' => 'Celendín',
                'departament_id' => 13,
            ],
            [
                'name' => 'Chota',
                'departament_id' => 13,
            ],
            [
                'name' => 'Contumazá',
                'departament_id' => 13,
            ],
            [
                'name' => 'Cutervo',
                'departament_id' => 13,
            ],
            [
                'name' => 'Hualgayoc',
                'departament_id' => 13,
            ],
            [
                'name' => 'Jaén',
                'departament_id' => 13,
            ],
            [
                'name' => 'San Ignacio',
                'departament_id' => 13,
            ],
            [
                'name' => 'San Marcos',
                'departament_id' => 13,
            ],
            [
                'name' => 'San Miguel',
                'departament_id' => 13,
            ],
            [
                'name' => 'San Pablo',
                'departament_id' => 13,
            ],
            [
                'name' => 'Santa Cruz',
                'departament_id' => 13,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT LA LIBERTAD

        Province::insert([
            [
                'name' => 'Trujillo',
                'departament_id' => 14,
            ],
            [
                'name' => 'Ascope',
                'departament_id' => 14,
            ],
            [
                'name' => 'Bolívar',
                'departament_id' => 14,
            ],
            [
                'name' => 'Chepén',
                'departament_id' => 14,
            ],
            [
                'name' => 'Julcán',
                'departament_id' => 14,
            ],
            [
                'name' => 'Otuzco',
                'departament_id' => 14,
            ],
            [
                'name' => 'Pacasmayo',
                'departament_id' => 14,
            ],
            [
                'name' => 'Pataz',
                'departament_id' => 14,
            ],
            [
                'name' => 'Sánchez Carrión',
                'departament_id' => 14,
            ],
            [
                'name' => 'Santiago de Chuco',
                'departament_id' => 14,
            ],
            [
                'name' => 'Gran Chimú',
                'departament_id' => 14,
            ],
            [
                'name' => 'Virú',
                'departament_id' => 14,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT ANCASH

        Province::insert([
            [
                'name' => 'Huaraz',
                'departament_id' => 15,
            ],
            [
                'name' => 'Aija',
                'departament_id' => 15,
            ],
            [
                'name' => 'Antonio Raymondi',
                'departament_id' => 15,
            ],
            [
                'name' => 'Asunción',
                'departament_id' => 15,
            ],
            [
                'name' => 'Bolognesi',
                'departament_id' => 15,
            ],
            [
                'name' => 'Carhuaz',
                'departament_id' => 15,
            ],
            [
                'name' => 'Carlos Fermín Fitzcarrald',
                'departament_id' => 15,
            ],
            [
                'name' => 'Casma',
                'departament_id' => 15,
            ],
            [
                'name' => 'Corongo',
                'departament_id' => 15,
            ],
            [
                'name' => 'Huari',
                'departament_id' => 15,
            ],
            [
                'name' => 'Huarmey',
                'departament_id' => 15,
            ],
            [
                'name' => 'Huaylas',
                'departament_id' => 15,
            ],
            [
                'name' => 'Mariscal Luzuriaga',
                'departament_id' => 15,
            ],
            [
                'name' => 'Ocros',
                'departament_id' => 15,
            ],
            [
                'name' => 'Pallasca',
                'departament_id' => 15,
            ],
            [
                'name' => 'Pomabamba',
                'departament_id' => 15,
            ],
            [
                'name' => 'Recuay',
                'departament_id' => 15,
            ],
            [
                'name' => 'Santa',
                'departament_id' => 15,
            ],
            [
                'name' => 'Sihuas',
                'departament_id' => 15,
            ],
            [
                'name' => 'Yungay',
                'departament_id' => 15,
            ],
            [
                'name' => 'Casma',
                'departament_id' => 15,
            ],
            [
                'name' => '
                Corongo',
                'departament_id' => 15,
            ],
            [
                'name' => 'Huari',
                'departament_id' => 15,
            ],
            [
                'name' => 'Huarmey',
                'departament_id' => 15,
            ],
            [
                'name' => 'Huaylas',
                'departament_id' => 15,
            ],
            [
                'name' => 'Mariscal Luzuriaga',
                'departament_id' => 15,
            ],
            [
                'name' => 'Ocros',
                'departament_id' => 15,
            ],
            [
                'name' => 'Pallasca',
                'departament_id' => 15,
            ],
            [
                'name' => 'Pomabamba',
                'departament_id' => 15,
            ],
            [
                'name' => 'Recuay',
                'departament_id' => 15,
            ],
            [
                'name' => 'Santa',
                'departament_id' => 15,
            ],
            [
                'name' => 'Sihuas',
                'departament_id' => 15,
            ],
            [
                'name' => 'Yungay',
                'departament_id' => 15,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT PIURA

        Province::insert([
            [
                'name' => 'Piura',
                'departament_id' => 16,
            ],
            [
                'name' => 'Ayabaca',
                'departament_id' => 16,
            ],
            [
                'name' => 'Huancabamba',
                'departament_id' => 16,
            ],
            [
                'name' => 'Morropón',
                'departament_id' => 16,
            ],
            [
                'name' => 'Paita',
                'departament_id' => 16,
            ],
            [
                'name' => 'Sullana',
                'departament_id' => 16,
            ],
            [
                'name' => 'Talara',
                'departament_id' => 16,
            ],
            [
                'name' => 'Sechura',
                'departament_id' => 16,
            ],
            [
                'name' => 'Ayabaca',
                'departament_id' => 16,
            ],
            [
                'name' => 'Huancabamba',
                'departament_id' => 16,
            ],
            [
                'name' => 'Morropón',
                'departament_id' => 16,
            ],
            [
                'name' => 'Paita',
                'departament_id' => 16,
            ],
            [
                'name' => 'Sullana',
                'departament_id' => 16,
            ],
            [
                'name' => 'Talara',
                'departament_id' => 16,
            ],
            [
                'name' => 'Sechura',
                'departament_id' => 16,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT TUMBES

        Province::insert([
            [
                'name' => 'Tumbes',
                'departament_id' => 17,
            ],
            [
                'name' => 'Contralmirante Villar',
                'departament_id' => 17,
            ],
            [
                'name' => 'Zarumilla',
                'departament_id' => 17,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT LAMBAYEQUE

        Province::insert([
            [
                'name' => 'Chiclayo',
                'departament_id' => 18,
            ],
            [
                'name' => 'Ferreñafe',
                'departament_id' => 18,
            ],
            [
                'name' => 'Lambayeque',
                'departament_id' => 18,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT JUNIN

        Province::insert([
            [
                'name' => 'Huancayo',
                'departament_id' => 19,
            ],
            [
                'name' => 'Concepción',
                'departament_id' => 19,
            ],
            [
                'name' => 'Chanchamayo',
                'departament_id' => 19,
            ],
            [
                'name' => 'Jauja',
                'departament_id' => 19,
            ],
            [
                'name' => 'Junín',
                'departament_id' => 19,
            ],
            [
                'name' => 'Satipo',
                'departament_id' => 19,
            ],
            [
                'name' => 'Tarma',
                'departament_id' => 19,
            ],
            [
                'name' => 'Yauli',
                'departament_id' => 19,
            ],
            [
                'name' => 'Chupaca',
                'departament_id' => 19,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT PASCO

        Province::insert([
            [
                'name' => 'Pasco',
                'departament_id' => 20,
            ],
            [
                'name' => 'Daniel Alcides Carrión',
                'departament_id' => 20,
            ],
            [
                'name' => 'Oxapampa',
                'departament_id' => 20,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT AYACUCHO

        Province::insert([
            [
                'name' => 'Huamanga',
                'departament_id' => 21,
            ],
            [
                'name' => 'Cangallo',
                'departament_id' => 21,
            ],
            [
                'name' => 'Huanca Sancos',
                'departament_id' => 21,
            ],
            [
                'name' => 'Huanta',
                'departament_id' => 21,
            ],
            [
                'name' => 'La Mar',
                'departament_id' => 21,
            ],
            [
                'name' => 'Lucanas',
                'departament_id' => 21,
            ],
            [
                'name' => 'Parinacochas',
                'departament_id' => 21,
            ],
            [
                'name' => 'Pàucar del Sara Sara',
                'departament_id' => 21,
            ],
            [
                'name' => 'Sucre',
                'departament_id' => 21,
            ],
            [
                'name' => 'Víctor Fajardo',
                'departament_id' => 21,
            ],
            [
                'name' => 'Vilcas Huamán',
                'departament_id' => 21,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT APURIMAC

        Province::insert([
            [
                'name' => 'Abancay',
                'departament_id' => 22,
            ],
            [
                'name' => 'Andahuaylas',
                'departament_id' => 22,
            ],
            [
                'name' => 'Antabamba',
                'departament_id' => 22,
            ],
            [
                'name' => 'Aymaraes',
                'departament_id' => 22,
            ],
            [
                'name' => 'Cotabambas',
                'departament_id' => 22,
            ],
            [
                'name' => 'Chincheros',
                'departament_id' => 22,
            ],
            [
                'name' => 'Grau',
                'departament_id' => 22,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT HUANCAVELICA

        Province::insert([
            [
                'name' => 'Huancavelica',
                'departament_id' => 23,
            ],
            [
                'name' => 'Acobamba',
                'departament_id' => 23,
            ],
            [
                'name' => 'Angaraes',
                'departament_id' => 23,
            ],
            [
                'name' => 'Castrovirreyna',
                'departament_id' => 23,
            ],
            [
                'name' => 'Churcampa',
                'departament_id' => 23,
            ],
            [
                'name' => 'Huaytará',
                'departament_id' => 23,
            ],
            [
                'name' => 'Tayacaja',
                'departament_id' => 23,
            ],
        ]);
        
        
    }
}
