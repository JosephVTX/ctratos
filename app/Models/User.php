<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Auth;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use SoftDeletes, HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'codigo',
        'estado',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function areas()
    {
        return $this->belongsToMany(Area::class, 'user_areas');
    }


    public function getUsers()
    {

        // if this is

        if (Auth::user()->hasRole(['God', 'Tecnico'])) {

            return $this->with('areas')->get();

        } else if (Auth::user()->hasRole(['Supervisor'])) {

            return $this->with('area.supervisor')->where('area_id', Auth::user()->area_id)->get();
        } else {
            return [];
        }
    }

    public function contratos()
    {
        return $this->hasMany(Contrato::class);
    }

    public function supervisor()
    {
        return $this->hasOne(Supervisor::class);
    }
}
