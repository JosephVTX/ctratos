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
        return $this->belongsTo(Supervisor::class)->with("user");
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_areas');
    }

    public function contratos()
    {
        return $this->hasMany(Contrato::class);
    }
}
