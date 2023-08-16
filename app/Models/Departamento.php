<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre'
    ];

    //1 Departamento pertenece a varias provincias

    public function provincias()
    {
        return $this->hasMany(Provincia::class);
    }
}
