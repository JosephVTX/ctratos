<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [

            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users,username',
            'email' => 'required|string|email|max:255|unique:users,email',
            'codigo' => 'required|string|max:255|unique:users,codigo',
            'password' => 'required|string|min:8|confirmed',
            'area_id' => 'required|array',
            'area_id.*' => 'integer|exists:areas,id',
            'supervisor_id' => 'nullable|integer|exists:users,id',
            'rol' => 'required|string|exists:roles,name',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */

    public function messages(): array
    {


        return [

            'name.required' => 'El nombre es requerido',
            'username.required' => 'El usuario es requerido',
            'email.required' => 'El correo es requerido',
            'codigo.required' => 'El codigo es requerido',
            'password.required' => 'La contraseña es requerida',
            'area_id.required' => 'El area es requerida',
            'area_id.*.required' => 'El area es requerida',
            'rol.required' => 'El rol es requerido',

        ];
    }
}
