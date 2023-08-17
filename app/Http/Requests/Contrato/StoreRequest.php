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

        /* VALIDATE


        {
        nombres: "",
        apellidos: "",
        tipo_doc: "",
        numero_doc: "",
        departamento: {
            id: 0,
            nombre: "",
        },
        provincia: {
            id: 0,
            nombre: "",
        },
        distrito: "",
        direccion: "",
        correo: "",
        celular: "",
        genero: "",
        ocupacion: "",
        tipo_contrato: tipo_contratos[0],
        rentabilidad: {
            id: 0,
            porcentaje: 0,
        },
        vigencia_contrato: "",
        moneda: "",
        capital: "",
        fecha_inicio: "",
        fecha_fin: "",
        banco_cliente: "",
        tipo_cuenta_cliente: "",
        numero_cuenta_cliente: "",
        numero_cci_cliente: "",
        banco_gjg: "",

        dni_anverso: "",
        dni_reverso: "",
        declaracion_jurada: [new File([""], "")],
        sustento_declaracion_jurada: [new File([""], "")],
        comprobantes_pago: [new File([""], "")],
    }
        

        */
        return [

            'nombres' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'tipo_doc' => 'required|string|max:255',
            'numero_doc' => 'required|string|max:255',
            'departamento' => 'required|string|max:255',
            'provincia' => 'required|string|max:255',
            'distrito' => 'required|string|max:255',
            'direccion' => 'required|string|max:255',
            'correo' => 'required|string|max:255',
            'celular' => 'required|string|max:255',
            'genero' => 'required|string|max:255',
            'ocupacion' => 'required|string|max:255',
            'tipo_contrato' => 'required|string|max:255',
            'rentabilidad' => 'required|string|max:255',
            'vigencia_contrato' => 'required|string|max:255',
            'moneda' => 'required|string|max:255',
            'capital' => 'required|string|max:255',
            'fecha_inicio' => 'required|string|max:255',
            'fecha_fin' => 'required|string|max:255',
            'banco_cliente' => 'required|string|max:255',
            'tipo_cuenta_cliente' => 'required|string|max:255',
            'numero_cuenta_cliente' => 'required|string|max:255',
            'numero_cci_cliente' => 'required|string|max:255',
            'banco_gjg' => 'required|string|max:255',
            'dni_anverso' => 'required|string|max:255',
            'dni_reverso' => 'required|string|max:255',
            'declaracion_jurada' => 'required|string|max:255',
            'sustento_declaracion_jurada' => 'required|string|max:255',
            'comprobantes_pago' => 'required|string|max:255',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     */

    public function messages(): array

    {
        return [
            'nombres.required' => 'El campo nombres es requerido',
            'apellidos.required' => 'El campo apellidos es requerido',
            'tipo_doc.required' => 'El campo tipo_doc es requerido',
            'numero_doc.required' => 'El campo numero_doc es requerido',
            'departamento.required' => 'El campo departamento es requerido',
            'provincia.required' => 'El campo provincia es requerido',
            'distrito.required' => 'El campo distrito es requerido',
            'direccion.required' => 'El campo direccion es requerido',
            'correo.required' => 'El campo correo es requerido',
            'celular.required' => 'El campo celular es requerido',
            'genero.required' => 'El campo genero es requerido',
            'ocupacion.required' => 'El campo ocupacion es requerido',
            'tipo_contrato.required' => 'El campo tipo_contrato es requerido',
            'rentabilidad.required' => 'El campo rentabilidad es requerido',
            'vigencia_contrato.required' => 'El campo vigencia_contrato es requerido',
            'moneda.required' => 'El campo moneda es requerido',
            'capital.required' => 'El campo capital es requerido',
            'fecha_inicio.required' => 'El campo fecha_inicio es requerido',
            'fecha_fin.required' => 'El campo fecha_fin es requerido',
            'banco_cliente.required' => 'El campo banco_cliente es requerido',
            'tipo_cuenta_cliente.required' => 'El campo tipo_cuenta_cliente es requerido',
            'numero_cuenta_cliente.required' => 'El campo numero_cuenta_cliente es requerido',
            'numero_cci_cliente.required' => 'El campo numero_cci_cliente es requerido',
            'banco_gjg.required' => 'El campo banco_gjg es requerido',
            'dni_anverso.required' => 'El campo dni_anverso es requerido',
            'dni_reverso.required' => 'El campo dni_reverso es requerido',
            'declaracion_jurada.required' => 'El campo declaracion_jurada es requerido',
            'sustento_declaracion_jurada.required' => 'El campo sustento_declaracion_jurada es requerido',
            'comprobantes_pago.required' => 'El campo comprobantes_pago es requerido',
        ];
    }
}
