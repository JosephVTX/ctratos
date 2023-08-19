<?php

namespace App\Models;

use Auth;
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

    public function getAreas()
    {

        if (Auth::user()->hasRole(['God', 'Tecnico'])) {


            return $this->with('supervisor', 'users')->get();
        } else if (Auth::user()->hasRole(['Supervisor'])) {

            // were Supervisor is area leader
            return $this->whereHas('supervisor', function ($query) {
                $query->where('user_id', Auth::user()->id);
            })->with('supervisor', 'users')->get();
            
        } else {

            return [];
        }
    }
}
