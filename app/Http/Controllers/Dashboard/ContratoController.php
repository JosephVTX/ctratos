<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContratoController extends Controller
{
    //

    public function index()
    {
        //

        return inertia('Dashboard/Contractos/Index',[

            'departamentos' => \App\Models\Departamento::all(),
            'provincias' => \App\Models\Provincia::all(),
            'distritos' => \App\Models\Distrito::all(),
        ]);
    }

    public function create()
    {
        //

        return inertia('Dashboard/Contratos/Create',[

            'departamentos' => \App\Models\Departamento::all(),
            'provincias' => \App\Models\Provincia::all(),
            'distritos' => \App\Models\Distrito::all(),

            'tipo_contratos' => \App\Models\TipoContrato::all(),
            'rentabilidades' => \App\Models\Rentabilidad::all(),
            'vigencia_contratos' => \App\Models\VigenciaContrato::all(),
        ]);
    }
}
