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
        'fecha_venta',
        'tiene_factura',
        'banco_cliente',
        'tipo_cuenta_cliente',
        'numero_cuenta_cliente',
        'numero_cci_cliente',
        'dni_anverso',
        'dni_reverso',
        'banco_gjg',
        'declaracion_jurada',
        'sustento_declaracion_jurada',
        'comprobantes_pago',
        'comprobantes_pago_codigo_operacion',
        'cronograma',
        'estado',
    ];


    protected $casts = [
        'rentabilidad' => 'array',
        'vigencia_contrato' => 'array',
        'banco_gjg' => 'array',
        'declaracion_jurada' => 'array',
        'sustento_declaracion_jurada' => 'array',
        'comprobantes_pago' => 'array',
        'comprobantes_pago_codigo_operacion' => 'array',
        'cronograma' => 'array',
    ];

    protected $appends = ['created_at', 'titulo_contrato'];

    public function getCreatedAtAttribute()
    {
        return \Carbon\Carbon::parse($this->attributes['created_at'])->format('d/m/Y');
    }


    public function getTituloContratoAttribute()
    {
        $month = date('m', strtotime($this->attributes['created_at']));
        $year = date('Y', strtotime($this->attributes['created_at']));
        return 'CONTRATO N° ' . $this->user->codigo . '-' . $month . '-' . $this->id . ' / ' . $year . '-' . 'GJG';
    }

    public function getFechaInicioAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->format('d/m/Y');
    }

    public function getFechaFinAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->format('d/m/Y');
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
