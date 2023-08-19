<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Area;
use App\Models\User;

class HomeController extends Controller
{
    public $user, $area;

    public function __construct(User $user, Area $area)
    {
        $this->user = $user;
        $this->area = $area;
    }

    public function index()
    {
        return inertia('Dashboard/Index', [
            'users' => $this->user->getUsers(),
            'areas' => $this->area->getAreas(),
        ]);
    }
}
