<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'username' => fake()->unique()->userName(),

            //codigo example D04, D09, A99, FRSK, FRRBM GC
            'codigo' => $this->faker->unique()->regexify('[A-Z]{5}'),
            'estado' => $this->faker->randomElement(['Activo', 'Inactivo']),
            'email_verified_at' => now(),
            'password' => bcrypt('12345678'), // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    /**
     * Indicate that the user is an admin.
     */

     public function configure(): static
     {
         return $this->afterCreating(function (\App\Models\User $user) {
            
             $user->assignRole($this->faker->randomElement(['God', 'Tecnico', 'Supervisor', 'Usuario']));
         });
     }
}
