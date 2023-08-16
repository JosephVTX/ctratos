<?php

namespace Database\Seeders;

use App\Models\Provincia;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProvinciaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Provincia::insert([
            [
                'nombre' => 'Lima',
                'departamento_id' => 1,
            ],
            [
                'nombre' => 'Barranca',
                'departamento_id' => 1,
            ],
            [
                'nombre' => 'Cajatambo',
                'departamento_id' => 1,
            ],
            [
                'nombre' => 'Canta',
                'departamento_id' => 1,
            ],
            [
                'nombre' => 'Cañete',
                'departamento_id' => 1,
            ],
            [
                'nombre' => 'Huaral',
                'departamento_id' => 1,
            ],
            [
                'nombre' => 'Huarochirí',
                'departamento_id' => 1,
            ],
            [
                'nombre' => 'Huaura',
                'departamento_id' => 1,
            ],
            [
                'nombre' => 'Oyón',
                'departamento_id' => 1,
            ],
            [
                'nombre' => 'Yauyos',
                'departamento_id' => 1,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT AREQUIPA

        Provincia::insert([
            [
                'nombre' => 'Arequipa',
                'departamento_id' => 2,
            ],
            [
                'nombre' => 'Camaná',
                'departamento_id' => 2,
            ],
            [
                'nombre' => 'Caravelí',
                'departamento_id' => 2,
            ],
            [
                'nombre' => 'Castilla',
                'departamento_id' => 2,
            ],
            [
                'nombre' => 'Caylloma',
                'departamento_id' => 2,
            ],
            [
                'nombre' => 'Condesuyos',
                'departamento_id' => 2,
            ],
            [
                'nombre' => 'Islay',
                'departamento_id' => 2,
            ],
            [
                'nombre' => 'La Uniòn',
                'departamento_id' => 2,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT CUSCO

        Provincia::insert([
            [
                'nombre' => 'Cusco',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Acomayo',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Anta',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Calca',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Canas',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Canchis',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Chumbivilcas',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Espinar',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'La Convención',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Paruro',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Paucartambo',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Quispicanchi',
                'departamento_id' => 3,
            ],
            [
                'nombre' => 'Urubamba',
                'departamento_id' => 3,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT PUNO

        Provincia::insert([
            [
                'nombre' => 'Puno',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'Azángaro',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'Carabaya',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'Chucuito',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'El Collao',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'Huancané',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'Lampa',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'Melgar',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'Moho',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'San Antonio de Putina',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'San Román',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'Sandia',
                'departamento_id' => 4,
            ],
            [
                'nombre' => 'Yunguyo',
                'departamento_id' => 4,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT TACNA

        Provincia::insert([
            [
                'nombre' => 'Tacna',
                'departamento_id' => 5,
            ],
            [
                'nombre' => 'Candarave',
                'departamento_id' => 5,
            ],
            [
                'nombre' => 'Jorge Basadre',
                'departamento_id' => 5,
            ],
            [
                'nombre' => 'Tarata',
                'departamento_id' => 5,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT MOQUEGUA

        Provincia::insert([
            [
                'nombre' => 'Mariscal Nieto',
                'departamento_id' => 6,
            ],
            [
                'nombre' => 'General Sánchez Cerro',
                'departamento_id' => 6,
            ],
            [
                'nombre' => 'Ilo',
                'departamento_id' => 6,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT MADRE DE DIOS

        Provincia::insert([
            [
                'nombre' => 'Tambopata',
                'departamento_id' => 7,
            ],
            [
                'nombre' => 'Manu',
                'departamento_id' => 7,
            ],
            [
                'nombre' => 'Tahuamanu',
                'departamento_id' => 7,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT ICA

        Provincia::insert([
            [
                'nombre' => 'Ica',
                'departamento_id' => 8,
            ],
            [
                'nombre' => 'Chincha',
                'departamento_id' => 8,
            ],
            [
                'nombre' => 'Nazca',
                'departamento_id' => 8,
            ],
            [
                'nombre' => 'Palpa',
                'departamento_id' => 8,
            ],
            [
                'nombre' => 'Pisco',
                'departamento_id' => 8,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT LORETO

        Provincia::insert([
            [
                'nombre' => 'Maynas',
                'departamento_id' => 9,
            ],
            [
                'nombre' => 'Alto Amazonas',
                'departamento_id' => 9,
            ],
            [
                'nombre' => 'Loreto',
                'departamento_id' => 9,
            ],
            [
                'nombre' => 'Mariscal Ramón Castilla',
                'departamento_id' => 9,
            ],
            [
                'nombre' => 'Requena',
                'departamento_id' => 9,
            ],
            [
                'nombre' => 'Ucayali',
                'departamento_id' => 9,
            ],
            [
                'nombre' => 'Datem del Marañón',
                'departamento_id' => 9,
            ],
            [
                'nombre' => 'Putumayo',
                'departamento_id' => 9,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT UCAYALI

        Provincia::insert([
            [
                'nombre' => 'Coronel Portillo',
                'departamento_id' => 10,
            ],
            [
                'nombre' => 'Atalaya',
                'departamento_id' => 10,
            ],
            [
                'nombre' => 'Padre Abad',
                'departamento_id' => 10,
            ],
            [
                'nombre' => 'Purús',
                'departamento_id' => 10,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT SAN MARTIN

        Provincia::insert([
            [
                'nombre' => 'Moyobamba',
                'departamento_id' => 11,
            ],
            [
                'nombre' => 'Bellavista',
                'departamento_id' => 11,
            ],
            [
                'nombre' => 'El Dorado',
                'departamento_id' => 11,
            ],
            [
                'nombre' => 'Huallaga',
                'departamento_id' => 11,
            ],
            [
                'nombre' => 'Lamas',
                'departamento_id' => 11,
            ],
            [
                'nombre' => 'Mariscal Cáceres',
                'departamento_id' => 11,
            ],
            [
                'nombre' => 'Picota',
                'departamento_id' => 11,
            ],
            [
                'nombre' => 'Rioja',
                'departamento_id' => 11,
            ],
            [
                'nombre' => 'San Martín',
                'departamento_id' => 11,
            ],
            [
                'nombre' => 'Tocache',
                'departamento_id' => 11,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT AMAZONAS

        Provincia::insert([
            [
                'nombre' => 'Chachapoyas',
                'departamento_id' => 12,
            ],
            [
                'nombre' => 'Bagua',
                'departamento_id' => 12,
            ],
            [
                'nombre' => 'Bongará',
                'departamento_id' => 12,
            ],
            [
                'nombre' => 'Condorcanqui',
                'departamento_id' => 12,
            ],
            [
                'nombre' => 'Luya',
                'departamento_id' => 12,
            ],
            [
                'nombre' => 'Rodríguez de Mendoza',
                'departamento_id' => 12,
            ],
            [
                'nombre' => 'Utcubamba',
                'departamento_id' => 12,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT CAJAMARCA

        Provincia::insert([
            [
                'nombre' => 'Cajamarca',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'Cajabamba',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'Celendín',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'Chota',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'Contumazá',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'Cutervo',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'Hualgayoc',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'Jaén',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'San Ignacio',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'San Marcos',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'San Miguel',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'San Pablo',
                'departamento_id' => 13,
            ],
            [
                'nombre' => 'Santa Cruz',
                'departamento_id' => 13,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT LA LIBERTAD

        Provincia::insert([
            [
                'nombre' => 'Trujillo',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Ascope',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Bolívar',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Chepén',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Julcán',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Otuzco',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Pacasmayo',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Pataz',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Sánchez Carrión',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Santiago de Chuco',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Gran Chimú',
                'departamento_id' => 14,
            ],
            [
                'nombre' => 'Virú',
                'departamento_id' => 14,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT ANCASH

        Provincia::insert([
            [
                'nombre' => 'Huaraz',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Aija',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Antonio Raymondi',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Asunción',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Bolognesi',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Carhuaz',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Carlos Fermín Fitzcarrald',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Casma',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Corongo',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Huari',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Huarmey',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Huaylas',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Mariscal Luzuriaga',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Ocros',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Pallasca',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Pomabamba',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Recuay',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Santa',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Sihuas',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Yungay',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Casma',
                'departamento_id' => 15,
            ],
            [
                'nombre' => '
                Corongo',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Huari',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Huarmey',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Huaylas',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Mariscal Luzuriaga',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Ocros',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Pallasca',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Pomabamba',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Recuay',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Santa',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Sihuas',
                'departamento_id' => 15,
            ],
            [
                'nombre' => 'Yungay',
                'departamento_id' => 15,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT PIURA

        Provincia::insert([
            [
                'nombre' => 'Piura',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Ayabaca',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Huancabamba',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Morropón',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Paita',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Sullana',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Talara',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Sechura',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Ayabaca',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Huancabamba',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Morropón',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Paita',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Sullana',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Talara',
                'departamento_id' => 16,
            ],
            [
                'nombre' => 'Sechura',
                'departamento_id' => 16,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT TUMBES

        Provincia::insert([
            [
                'nombre' => 'Tumbes',
                'departamento_id' => 17,
            ],
            [
                'nombre' => 'Contralmirante Villar',
                'departamento_id' => 17,
            ],
            [
                'nombre' => 'Zarumilla',
                'departamento_id' => 17,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT LAMBAYEQUE

        Provincia::insert([
            [
                'nombre' => 'Chiclayo',
                'departamento_id' => 18,
            ],
            [
                'nombre' => 'Ferreñafe',
                'departamento_id' => 18,
            ],
            [
                'nombre' => 'Lambayeque',
                'departamento_id' => 18,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT JUNIN

        Provincia::insert([
            [
                'nombre' => 'Huancayo',
                'departamento_id' => 19,
            ],
            [
                'nombre' => 'Concepción',
                'departamento_id' => 19,
            ],
            [
                'nombre' => 'Chanchamayo',
                'departamento_id' => 19,
            ],
            [
                'nombre' => 'Jauja',
                'departamento_id' => 19,
            ],
            [
                'nombre' => 'Junín',
                'departamento_id' => 19,
            ],
            [
                'nombre' => 'Satipo',
                'departamento_id' => 19,
            ],
            [
                'nombre' => 'Tarma',
                'departamento_id' => 19,
            ],
            [
                'nombre' => 'Yauli',
                'departamento_id' => 19,
            ],
            [
                'nombre' => 'Chupaca',
                'departamento_id' => 19,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT PASCO

        Provincia::insert([
            [
                'nombre' => 'Pasco',
                'departamento_id' => 20,
            ],
            [
                'nombre' => 'Daniel Alcides Carrión',
                'departamento_id' => 20,
            ],
            [
                'nombre' => 'Oxapampa',
                'departamento_id' => 20,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT AYACUCHO

        Provincia::insert([
            [
                'nombre' => 'Huamanga',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'Cangallo',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'Huanca Sancos',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'Huanta',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'La Mar',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'Lucanas',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'Parinacochas',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'Pàucar del Sara Sara',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'Sucre',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'Víctor Fajardo',
                'departamento_id' => 21,
            ],
            [
                'nombre' => 'Vilcas Huamán',
                'departamento_id' => 21,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT APURIMAC

        Provincia::insert([
            [
                'nombre' => 'Abancay',
                'departamento_id' => 22,
            ],
            [
                'nombre' => 'Andahuaylas',
                'departamento_id' => 22,
            ],
            [
                'nombre' => 'Antabamba',
                'departamento_id' => 22,
            ],
            [
                'nombre' => 'Aymaraes',
                'departamento_id' => 22,
            ],
            [
                'nombre' => 'Cotabambas',
                'departamento_id' => 22,
            ],
            [
                'nombre' => 'Chincheros',
                'departamento_id' => 22,
            ],
            [
                'nombre' => 'Grau',
                'departamento_id' => 22,
            ],
        ]);

        //ALL PROVIMCE DEPARTAMENT HUANCAVELICA

        Provincia::insert([
            [
                'nombre' => 'Huancavelica',
                'departamento_id' => 23,
            ],
            [
                'nombre' => 'Acobamba',
                'departamento_id' => 23,
            ],
            [
                'nombre' => 'Angaraes',
                'departamento_id' => 23,
            ],
            [
                'nombre' => 'Castrovirreyna',
                'departamento_id' => 23,
            ],
            [
                'nombre' => 'Churcampa',
                'departamento_id' => 23,
            ],
            [
                'nombre' => 'Huaytará',
                'departamento_id' => 23,
            ],
            [
                'nombre' => 'Tayacaja',
                'departamento_id' => 23,
            ],
        ]);
    }
}
