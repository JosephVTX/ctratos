<?php

namespace App\Http\Requests\Contrato;

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

            // Datos del Cliente

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


            // Opciones de Contrato

            'tipo_contrato' => 'required|string|max:255',

            'rentabilidad' => 'required',

            'vigencia_contrato' => 'required',

            'moneda' => 'required|string',

            'capital' => 'required|string',

            'fecha_inicio' => 'required|date|after:today',

            'fecha_fin' => 'required|date|after:fecha_inicio',

            'fecha_venta' => 'required|date',

            'tiene_factura' => 'required|boolean',


            // Datos Cuenta Cliente

            'banco_cliente' => 'required|string|max:255',

            'tipo_cuenta_cliente' => 'required|string|max:255',

            'numero_cuenta_cliente' => 'required|numeric|digits_between:1,32',

            'numero_cci_cliente' => 'required|numeric|digits_between:1,32',

            //Datos Cuenta GJG

            'banco_gjg' => 'required',


            // Archivos Adjuntos

            'dni_anverso' => 'required|mimes:jpeg,png,jpg|max:2048',

            'dni_reverso' => 'required|mimes:jpeg,png,jpg,webp|max:2048',

            'declaracion_jurada' => 'required',
            'sustento_declaracion_jurada' => 'required',
            'comprobantes_pago' => 'required',
            'comprobantes_pago_codigo_operacion' => 'required'
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

            'nombres.required' => 'El campo es obligatorio',
            'nombres.max' => 'El campo no debe exceder los 255 caracteres',

            'apellidos.required' => 'El campo es obligatorio',
            'apellidos.max' => 'El campo no debe exceder los 255 caracteres',

            'tipo_doc.required' => 'El campo es obligatorio',
            'tipo_doc.max' => 'El campo no debe exceder los 255 caracteres',

            'numero_doc.required' => 'El campo es obligatorio',
            'numero_doc.numeric' => 'El campo debe ser numérico',

            'departamento.required' => 'El campo es obligatorio',
            'departamento.max' => 'El campo no debe exceder los 255 caracteres',

            'provincia.required' => 'El campo es obligatorio',
            'provincia.max' => 'El campo no debe exceder los 255 caracteres',

            'distrito.required' => 'El campo es obligatorio',
            'distrito.max' => 'El campo no debe exceder los 255 caracteres',

            'direccion.required' => 'El campo es obligatorio',
            'direccion.max' => 'El campo no debe exceder los 255 caracteres',

            'correo.required' => 'El campo es obligatorio',
            'celular.required' => 'El campo es obligatorio',


            'genero.required' => 'El campo es obligatorio',
            'genero.max' => 'El campo no debe exceder los 255 caracteres',

            'ocupacion.required' => 'El campo es obligatorio',
            'ocupacion.max' => 'El campo no debe exceder los 155 caracteres',

            'tipo_contrato.required' => 'El campo es obligatorio',

            'rentabilidad.required' => 'El campo rentabilidad es obligatorio',

            'vigencia_contrato.required' => 'El campo es obligatorio',

            'moneda.required' => 'El campo es obligatorio',

            'capital.required' => 'El campo es obligatorio',

            'fecha_inicio.required' => 'El campo es obligatorio',

            'fecha_fin.required' => 'El campo es obligatorio',

            'fecha_venta.required' => 'El campo es obligatorio',

            'tiene_factura.required' => 'El campo es obligatorio',

            'banco_cliente.required' => 'El campo es obligatorio',

            'tipo_cuenta_cliente.required' => 'El campo es obligatorio',

            'numero_cuenta_cliente.required' => 'El campo es obligatorio',

            'numero_cci_cliente.required' => 'El campo es obligatorio',

            'banco_gjg.required' => 'El campo es obligatorio',

            'dni_anverso.required' => 'El campo es obligatorio',
            'dni_anverso.mimes' => 'El campo debe ser un archivo de tipo: jpeg, png, jpg, webp',

            'dni_reverso.required' => 'El campo es obligatorio',
            'dni_reverso.mimes' => 'El campo debe ser un archivo de tipo: jpeg, png, jpg, webp',

            'declaracion_jurada.required' => 'El campo es obligatorio',

            'sustento_declaracion_jurada.required' => 'El campo es obligatorio',

            'comprobantes_pago.required' => 'El campo es obligatorio',

            'comprobantes_pago_codigo_operacion.required' => 'El campo es obligatorio',


        ];
    }
}
