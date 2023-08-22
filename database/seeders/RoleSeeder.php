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

        Permission::create(['name' => 'dashboard.areas.index'])->syncRoles(['God', 'Tecnico', 'Supervisor']);
        Permission::create(['name' => 'dashboard.areas.create'])->syncRoles(['God', 'Tecnico', 'Supervisor']);
        Permission::create(['name' => 'dashboard.areas.edit'])->syncRoles(['God', 'Tecnico', 'Supervisor']);
        Permission::create(['name' => 'dashboard.areas.destroy'])->syncRoles(['God', 'Tecnico', 'Supervisor']);


        Permission::create(['name' => 'dashboard.contratos.index'])->syncRoles(['God',  'Supervisor', 'Usuario']);
        Permission::create(['name' => 'dashboard.contratos.create'])->syncRoles(['Supervisor', 'Usuario']);
        Permission::create(['name' => 'dashboard.contratos.edit'])->syncRoles(['Supervisor']);
        Permission::create(['name' => 'dashboard.contratos.destroy'])->syncRoles(['God', 'Tecnico', 'Supervisor']);

        Permission::create(['name' => 'dashboard.users.index'])->syncRoles(['God', 'Tecnico']);
        Permission::create(['name' => 'dashboard.users.create'])->syncRoles(['God', 'Tecnico']);
        Permission::create(['name' => 'dashboard.users.edit'])->syncRoles(['God']);
        Permission::create(['name' => 'dashboard.users.destroy'])->syncRoles(['God', 'Tecnico']);
    }
}
