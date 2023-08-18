<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $roles = [
            'God',
            'Tecnico',
            'Supervisor',
            'Usuario',
        ];

        foreach ($roles as $role) {

            $user = User::create([
                'name' => $role,
                'username' => $role,
                'email' => $role . '@gmail.com',
                'codigo' => fake()->unique()->text(6),
                'estado' => fake()->randomElement(['Activo', 'Inactivo']),
                'password' => bcrypt('12345678'),
            ]);

            $user->assignRole($role);
        }

        \App\Models\User::factory(4)->create();
    }
}
