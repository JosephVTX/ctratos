<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateRequest;
use App\Models\Area;
use App\Models\User;

class UserController extends Controller
{
    //
    public $user, $area;
    public function __construct(User $user, Area $area)

    {   
        
        $this->user = $user;
        $this->area = $area;
        $this->authorizeResource(User::class, 'user');
    }

    public function index()
    {   
    

        return inertia('Dashboard/Usuarios/Index', [
            'usuarios' => $this->user->getUsers(),
            'areas' => $this->area->getAreas(),
        ]);
    }

    public function store(StoreRequest $request)
    {


        $user = User::create($request->validated());

        $user->areas()->attach($request->area_id);

        $user->assignRole($request->rol);

        return to_route('dashboard.users.index');
    }

    public function update(UpdateRequest $request, User $user)
    {

        if ($request->password == null) {
            $user->update($request->except('password'));
        } else {
            $user->update($request->validated());
        }

        $user->areas()->sync($request->area_id);

        $user->syncRoles($request->rol);

        return to_route('dashboard.users.index');
    }

    public function destroy(User $user)
    {

        $user->delete();

        return to_route('dashboard.users.index');
    }
}
