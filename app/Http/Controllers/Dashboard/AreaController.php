<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Area;

class AreaController extends Controller
{
    public $area;

    public function __construct(Area $area)
    {
        $this->area = $area;
    }

    public function index()
    {
        return inertia('Dashboard/Areas/Index', [
            'areas' => $this->area->getAreas(),
        ]);
    }
}
