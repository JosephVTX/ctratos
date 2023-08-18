<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateRequest;
use App\Models\User;

class UserController extends Controller
{
    //

    public function index()
    {
        return view('users.index');
    }


    public function store(StoreRequest $request)
    {


        $user = User::create($request->validated());
        
        $user->areas()->attach($request->area_id);

        $user->assignRole($request->rol);

        return to_route('dashboard.administracion.index');
    }


    public function update(UpdateRequest $request, User $user)
    {   
        
        $user->update($request->validated());

        $user->areas()->sync($request->area_id);

        $user->syncRoles($request->rol);

        return to_route('dashboard.administracion.index');
    }

    public function destroy(User $user)
    {

        /* dd($user); */
        $user->delete();

        return to_route('dashboard.administracion.index');
    }
}
