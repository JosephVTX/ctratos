<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function contractValidity()
    {
        return $this->hasMany(ContractValidity::class);
    }
}
