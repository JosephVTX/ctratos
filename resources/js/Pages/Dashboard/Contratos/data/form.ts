const contratoFormData = {
    nombres: "",
    apellidos: "",
    tipo_doc: "",
    numero_doc: "",
    departamento: {
        id: null,
        nombre: null,
    },
    provincia: {
        id: null,
        nombre: null,
    },
    distrito: "",
    direccion: "",
    correo: "",
    celular: "",
    genero: "",
    ocupacion: "",
    rentabilidad: {
        id: null,
        porcentaje: null,
    },
    vigencia_contrato: {
        cantidad: null,
        unidad: null,
    },
    moneda: "",
    capital: "",
    fecha_inicio: "",
    fecha_fin: "",
    fecha_venta: "",
    tiene_factura: false,
    banco_cliente: "",
    tipo_cuenta_cliente: "",
    numero_cuenta_cliente: "",
    numero_cci_cliente: "",
    banco_gjg: {
        nombre: "",
        cuenta: "",
    },

    dni_anverso: null as File | null,
    dni_reverso: null as File | null,
    declaracion_jurada: null as File[] | null,
    sustento_declaracion_jurada: null as File[] | null,
    comprobantes_pago: null as File[] | null,
};

const typeDocumentOptions = [
    {
        label: "DNI",
        value: "dni",
    },
    {
        label: "CE",
        value: "ce",
    },
    {
        label: "RUC",
        value: "ruc",
    },
];

const generoOptions = [
    {
        label: "Masculino",

        value: "masculino",
    },

    {
        label: "Femenino",
        value: "femenino",
    },
];

const bancoClienteOptions = [
    {
        label: "Banco de Crédito del Perú",
    },
    {
        label: "Banco Interbank",
    },
    {
        label: "Banco Scotiabank Perú",
    },
    {
        label: "Banco BBVA Perú",
    },
    {
        label: "Banco de la Nación",
    },
    {
        label: "Banco Pichincha",
    },
    {
        label: "Banco Falabella",
    },
];

const bancoGJGSolesOptions = [
    {
        nombre: "Banco Interbank Soles",
        cuenta: "2003004202994",
    },
    {
        nombre: "Banco BBVA Soles",
        cuenta: "001103680100051143",
    },
];

const bancoGJGDolaresOptions = [
    {
        nombre: "Banco Interbank Dólares",
        cuenta: "2003004203000",
    },
    {
        nombre: "Banco BBVA Dólares",
        cuenta: "001103680100051151",
    },
];

export {
    contratoFormData,
    typeDocumentOptions,
    generoOptions,
    bancoClienteOptions,
    bancoGJGSolesOptions,
    bancoGJGDolaresOptions,
};
