<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdministracionController extends Controller
{
    //

    private $users;
    private $areas;

    public function __construct()
    {
        $this->users = \App\Models\User::where([
            ['name', 'LIKE', '%' . request()->search . '%'],


        ])->with('roles', 'areas')->get();

        $this->areas = \App\Models\Area::orderBy('created_at', 'DESC')->get();
    }

    public function index()
    {
        return inertia('Dashboard/Administracion/Index', [

            'users' => $this->users,
            'areas' => $this->areas,

        ]);
    }
}
