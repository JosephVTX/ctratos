<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $roles = [
            [
                'name' => 'God',
            ],
            [
                'name' => 'Tecnico',

            ],

            [
                'name' => 'Supervisor',
            ],
            [
                'name' => 'Usuario',
            ],
        ];

        foreach ($roles as $role) {
            \Spatie\Permission\Models\Role::create($role);
        }


        
    }
}
