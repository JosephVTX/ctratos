<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supervisor extends Model
{
    use HasFactory;

    protected $table = 'supervisores';

    protected $fillable = [
        'user_id',
    ];

    public function areas()
    {
        return $this->hasMany(Area::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
