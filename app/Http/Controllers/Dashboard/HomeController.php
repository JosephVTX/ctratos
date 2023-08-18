<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Area;
use App\Models\User;

class HomeController extends Controller
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function index()
    {
        return inertia('Dashboard/Index', [
            'users' => $this->user->getUsers(),
            'areas' => Area::with('supervisor', 'users')->get(),
        ]);
    }

    
}
