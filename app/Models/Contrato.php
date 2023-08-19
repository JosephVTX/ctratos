<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contrato extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'area_id',
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
        'banco_gjg',
        'dni_anverso',
        'dni_reverso',
        'declaracion_jurada',
        'sustento_declaracion_jurada',
        'comprobantes_pago',
        'estado',
    ];


    protected $casts = [
        'declaracion_jurada' => 'array',
        'sustento_declaracion_jurada' => 'array',
        'comprobantes_pago' => 'array',
        'departamento' => 'array',
        'provincia' => 'array',
        'banco_gjg' => 'array',
        'rentabilidad' => 'array',
        'vigencia_contrato' => 'array',

    ];

    public function getCreatedAtAttribute()
    {
        return \Carbon\Carbon::parse($this->attributes['created_at'])->format('d/m/Y');
    }

    public function getContratos()
    {

        $search = request()->query('search');
        $tipo_contrato = request()->query('tipo_contrato');
        $moneda = request()->query('moneda');

        return $this->where('nombres', 'like', "%{$search}%")->where('tipo_contrato', 'like', "%{$tipo_contrato}%")->where('moneda', 'like', "%{$moneda}%")->with('user', 'area')->get();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function area()
    {
        return $this->belongsTo(Area::class);
    }
}
