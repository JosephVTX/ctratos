<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contrato extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombres',
        'apellidos',
        'tipo_doc',
        'numero_doc',
        'departamento',
        'provincia',
        'distrito',
        'direccion',
        'correo',
        'celular',
        'genero',
        'ocupacion',
        'tipo_contrato',
        'rentabilidad',
        'vigencia_contrato',
        'moneda',
        'capital',
        'fecha_inicio',
        'fecha_fin',
        'banco_cliente',
        'tipo_cuenta_cliente',
        'numero_cuenta_cliente',
        'numero_cci_cliente',
        'numero_cuenta_gjg',
        'nombre_cuenta_gjg',
        'dni_anverso',
        'dni_reverso',
        'declaracion_jurada',
        'sustento_declaracion_jurada',
        'comprobantes_pago',
    ];
}
