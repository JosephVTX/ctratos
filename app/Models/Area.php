<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    use HasFactory;

    protected $fillable = [
        'departamento',
        'direccion',
        'supervisor_id',
    ];

    public function supervisor()
    {
        return $this->belongsTo(Supervisor::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function contratos()
    {
        return $this->hasMany(Contrato::class);
    }
}
