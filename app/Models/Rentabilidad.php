<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rentabilidad extends Model
{
    use HasFactory;

    protected $table = 'rentabilidades';

    protected $fillable = [

        'porcentaje',
        'tipo_contrato_id'
    ];

    public function tipoContrato()
    {
        return $this->belongsTo(TipoContrato::class);
    }
}
