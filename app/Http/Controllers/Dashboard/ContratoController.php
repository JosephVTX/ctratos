<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contrato\PreviewRequest;
use App\Http\Requests\Contrato\StoreRequest;
use App\Models\Contrato;
use Illuminate\Http\Request;
use Validator;

class ContratoController extends Controller
{
    // 
    private $contrato;

    public function __construct(Contrato $contrato)
    {
        $this->contrato = $contrato;
        $this->authorizeResource(Contrato::class, 'contrato');
    }

    public function index()
    {

        return inertia('Dashboard/Contratos/Index', [

            'contratos' => $this->contrato->getContratos()
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

    public function update(Request $request, Contrato $contrato)
    {

        $contrato->update($request->all());

        return to_route("dashboard.contratos.index");
    }

    public function store(StoreRequest $request)
    {

        dd($request->all());
    }

    public function preview(PreviewRequest $request)
    {


        return to_route("dashboard.contratos.create");
    }

    public function cronograma(Request $request) {

        /* dd($request->all()); */

        Validator::make([
            'fecha' => $request->fecha,
            'monto' => $request->monto,
        ], [
            'fecha' => 'required|date|after:today',
            'monto' => 'required|numeric',

        ])->validate();

        to_route("dashboard.contratos.create");
    }

    public function show(Contrato $contrato)
    {



        return inertia('Dashboard/Contratos/Show', [

            'contrato' => $contrato,
        ]);
    }
}
