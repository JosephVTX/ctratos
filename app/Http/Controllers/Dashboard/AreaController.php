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

        $this->middleware(['can:dashboard.areas.index'])->only('index');
        $this->middleware(['can:dashboard.areas.edit'])->only('edit', 'update');
        $this->middleware(['can:dashboard.areas.create'])->only('create', 'store');
    }

    public function index()
    {
        return inertia('Dashboard/Areas/Index', [
            'areas' => $this->area->getAreas(),
        ]);
    }
}
