<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VigenciaContrato extends Model
{
    use HasFactory;

    protected $table = 'vigencia_contratos';

    protected $fillable = [
        'cantidad',
        'unidad',
        'rentabilidad_id',
    ];
}
