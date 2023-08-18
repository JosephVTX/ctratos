<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contrato\PreviewRequest;
use App\Http\Requests\Contrato\StoreRequest;
use App\Models\Contrato;

class ContratoController extends Controller
{
    // 
    private $contratos;

    public function __construct(Contrato $contratos)
    {
        $this->contratos = $contratos;
    }

    public function index()
    {

        return inertia('Dashboard/Contratos/Index', [

            'contratos' => $this->contratos->getContratos()
        ]);
    }

    public function create()
    {
        //

        return inertia('Dashboard/Contratos/Create', [

            'departamentos' => \App\Models\Departamento::all(),
            'provincias' => \App\Models\Provincia::all(),
            'distritos' => \App\Models\Distrito::all(),

            'tipo_contratos' => \App\Models\TipoContrato::all(),
            'rentabilidades' => \App\Models\Rentabilidad::all(),
            'vigencia_contratos' => \App\Models\VigenciaContrato::all(),
        ]);
    }

    public function store(StoreRequest $request)
    {

        dd($request->all());
    }

    public function preview(PreviewRequest $request)
    {


        return to_route("dashboard.contratos.create");
    }

    public function show(Contrato $contrato)
    {



        return inertia('Dashboard/Contratos/Show', [

            'contrato' => $contrato,
        ]);
    }
}
