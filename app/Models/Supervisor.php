<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supervisor extends Model
{
    use HasFactory;

    protected $table = 'supervisores';

    protected $fillable = [
        'nombre',
        'apellido',
        'documento',
        'telefono',
        'correo',
    ];

    public function areas()
    {
        return $this->hasMany(Area::class);
    }

}
