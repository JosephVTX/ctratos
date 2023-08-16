<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Http\Requests\StoreContractRequest;
use App\Http\Requests\UpdateContractRequest;

class ContractController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return inertia('Dashboard/Contracts/Index',[

            'departament' => \App\Models\Departament::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia('Dashboard/Contracts/Create',
    
    [
        'departament' => \App\Models\Departament::all(),
        'province' => \App\Models\Province::all(),
        'district' => \App\Models\District::all(),
        'contract_type' => \App\Models\ContractType::all(),
        'profit' => \App\Models\Profit::all(),
        'contract_validities' => \App\Models\ContractValidity::all(),
        'bank' => \App\Models\Bank::all(),
    ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContractRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Contract $contract)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contract $contract)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContractRequest $request, Contract $contract)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contract $contract)
    {
        //
    }
}
