/* 
    protected $fillable = [

        'user_id',
        'area_id',
        'nombres',
        'apellidos',
        'tipo_doc',
        'numero_doc',
        'departamento',
        'provincia',
        'distrito',
        'direccion',
        'correo',
        'celular',
        'genero',
        'ocupacion',
        'tipo_contrato',
        'rentabilidad',
        'vigencia_contrato',
        'moneda',
        'capital',
        'fecha_inicio',
        'fecha_fin',
        'fecha_venta',
        'tiene_factura',
        'banco_cliente',
        'tipo_cuenta_cliente',
        'numero_cuenta_cliente',
        'numero_cci_cliente',
        'dni_anverso',
        'dni_reverso',
        'banco_gjg',
        'declaracion_jurada',
        'sustento_declaracion_jurada',
        'comprobantes_pago',
        'comprobantes_pago_codigo_operacion',
        'cronograma',
        'estado',
    ];
*/

type Contrato = {
    id: number;
    user_id: number;
    area_id: number;
    nombres: string;
    apellidos: string;
    tipo_doc: string;
    numero_doc: string;
    departamento: string;
    provincia: string;
    distrito: string;
    direccion: string;
    correo: string;
    celular: string;
    genero: string;
    ocupacion: string;
    tipo_contrato: string;
    rentabilidad: string;
    vigencia_contrato: string;
    moneda: string;
    capital: number;
    fecha_inicio: string;
    fecha_fin: string;
    fecha_venta: string;
    tiene_factura: boolean;
    banco_cliente: string;
    tipo_cuenta_cliente: string;
    numero_cuenta_cliente: string;
    numero_cci_cliente: string;
    dni_anverso: string;
    dni_reverso: string;
    banco_gjg: string;
    declaracion_jurada: string;
    sustento_declaracion_jurada: string;
    comprobantes_pago: string;
    comprobantes_pago_codigo_operacion: string;
    cronograma: string;
    estado: string;
    created_at: string;
    updated_at: string;
};
