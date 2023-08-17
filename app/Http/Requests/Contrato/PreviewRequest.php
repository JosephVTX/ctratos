<?php

namespace App\Http\Requests\Contrato;

use Illuminate\Foundation\Http\FormRequest;

class PreviewRequest extends FormRequest
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

            'nombres' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',

            'tipo_doc' => 'required|string|max:255',
            'numero_doc' => 'required|numeric|digits_between:1,15',

            'departamento' => 'required|string|max:255',
            'provincia' => 'required|string|max:255',
            'distrito' => 'required|string|max:255',

            'direccion' => 'required|string|max:255',
            'correo' => 'required|email|max:255',

            'celular' => 'required|digits_between:1,15',
            'genero' => 'required|string|max:255',

            'ocupacion' => 'required|string|max:155',
            'tipo_contrato' => 'required|string|max:255',

            'rentabilidad' => 'required|string',


            'vigencia_contrato' => 'required|string',

            'moneda' => 'required|string|max:255',

            'capital' => 'required|string',

            'fecha_inicio' => 'required|date|after:today',

            'fecha_fin' => 'required|date|after:fecha_inicio',

            'banco_cliente' => 'required|string|max:255',

            'tipo_cuenta_cliente' => 'required|string|max:255',

            'numero_cuenta_cliente' => 'required|numeric|digits_between:1,15',

            'numero_cci_cliente' => 'required|numeric|digits_between:1,15',

            'banco_gjg' => 'required|string|max:255',

            'dni_anverso' => 'required|mimes:jpeg,png,jpg|max:2048',

            'dni_reverso' => 'required|mimes:jpeg,png,jpg,webp|max:2048',


            'declaracion_jurada' => 'required',
            'declaracion_jurada.*' => 'mimes:jpeg,png,jpg,webp,pdf|max:2048',
            'sustento_declaracion_jurada' => 'required',
            'sustento_declaracion_jurada.*' => 'mimes:jpeg,png,jpg,webp,pdf|max:2048',
            'comprobantes_pago' => 'required',
            'comprobantes_pago.*' => 'mimes:jpeg,png,jpg,webp,pdf|max:2048',
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

            'nombres.required' => 'El campo es requerido',
            'nombres.max' => 'El campo debe tener un máximo de 255 caracteres',

            'apellidos.required' => 'El campo es requerido',
            'apellidos.max' => 'El campo debe tener un máximo de 255 caracteres',

            'tipo_doc.required' => 'El campo es requerido',
            'tipo_doc.max' => 'El campo debe tener un máximo de 255 caracteres',

            'numero_doc.required' => 'El campo es requerido',
            'numero_doc.digits_between' => 'El campo debe estar entre 1 y 15 dígitos',

            'departamento.required' => 'El campo es requerido',
            'departamento.max' => 'El campo debe tener un máximo de 255 caracteres',

            'provincia.required' => 'El campo es requerido',
            'provincia.max' => 'El campo debe tener un máximo de 255 caracteres',

            'distrito.required' => 'El campo es requerido',
            'distrito.max' => 'El campo debe tener un máximo de 255 caracteres',

            'direccion.required' => 'El campo es requerido',
            'direccion.max' => 'El campo debe tener un máximo de 255 caracteres',

            'correo.required' => 'El campo es requerido',
            'correo.email' => 'El campo debe ser un correo válido',
            'correo.max' => 'El campo debe tener un máximo de 255 caracteres',

            'celular.required' => 'El campo es requerido',
            'celular.digits_between' => 'El campo debe estar entre 1 y 15 dígitos',

            'genero.required' => 'El campo es requerido',
            'genero.max' => 'El campo debe tener un máximo de 255 caracteres',

            'ocupacion.required' => 'El campo es requerido',
            'ocupacion.max' => 'El campo debe tener un máximo de 155 caracteres',

            'tipo_contrato.required' => 'El campo es requerido',
            'tipo_contrato.max' => 'El campo debe tener un máximo de 255 caracteres',

            'rentabilidad.required' => 'El campo es requerido',

            'vigencia_contrato.required' => 'El campo es requerido',
            'vigencia_contrato.max' => 'El campo debe tener un máximo de 255 caracteres',

            'moneda.required' => 'El campo es requerido',
            'moneda.max' => 'El campo debe tener un máximo de 255 caracteres',

            'capital.required' => 'El campo es requerido',
            

            'fecha_inicio.required' => 'El campo es requerido',
            'fecha_inicio.after' => 'El campo debe ser una fecha posterior a la actual',

            'fecha_fin.required' => 'El campo es requerido',
            'fecha_fin.after' => 'El campo debe ser una fecha posterior a la fecha de inicio',

            'banco_cliente.required' => 'El campo es requerido',
            'banco_cliente.max' => 'El campo debe tener un máximo de 255 caracteres',

            'tipo_cuenta_cliente.required' => 'El campo es requerido',
            'tipo_cuenta_cliente.max' => 'El campo debe tener un máximo de 255 caracteres',

            'numero_cuenta_cliente.required' => 'El campo es requerido',
            'numero_cuenta_cliente.digits_between' => 'El campo debe estar entre 1 y 15 dígitos',

            'numero_cci_cliente.required' => 'El campo es requerido',
            'numero_cci_cliente.digits_between' => 'El campo debe estar entre 1 y 15 dígitos',

            'banco_gjg.required' => 'El campo es requerido',

            'dni_anverso.required' => 'El campo es requerido',

            'dni_reverso.required' => 'El campo es requerido',

            'declaracion_jurada.required' => 'El campo es requerido',

            'sustento_declaracion_jurada.required' => 'El campo es requerido',

            'comprobantes_pago.required' => 'El campo es requerido',

        ];
    }
}
