<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Area>
 */
class AreaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //

            'departamento' => $this->faker->city(),
            'direccion' => $this->faker->address(),
            'supervisor_id' => \App\Models\Supervisor::factory(),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (\App\Models\Area $area) {
            $area->users()->attach($this->faker->numberBetween(1, 4));
        });
    }
}
