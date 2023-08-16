<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractValidity extends Model
{
    use HasFactory;

    protected $filable = [

        'quantity',
        'unit',
        'profit_id'
    ];

    public function contractType()
    {
        return $this->belongsTo(ContractType::class);
    }
}
