<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //

        if ($user->can('users.index')) {

            return true;
        }

        return false;
    }


    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, User $model): bool
    {
        //


        if ($user->can('users.index')) {

            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //

        if ($user->can('users.create')) {

            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user): bool
    {
        //


        if ($user->can('users.edit')) {

            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user): bool
    {
        //

        if ($user->can('users.destroy')) {

            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user): bool
    {
        //

        if ($user->can('users.index')) {

            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user): bool
    {
        //

        if ($user->can('users.index')) {

            return true;
        }

        return false;
    }
}
