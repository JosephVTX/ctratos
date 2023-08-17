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

    protected $keyType = 'string';

    public function provincias()
    {
        return $this->hasMany(Provincia::class);
    }

    public function distritos()
    {
        return $this->hasManyThrough(Distrito::class, Provincia::class);
    }
}
