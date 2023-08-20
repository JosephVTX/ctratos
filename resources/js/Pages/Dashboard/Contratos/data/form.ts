const contratoFormData = {
    nombres: "Joseph",
    apellidos: "Vega Callupe",
    tipo_doc: "dni",
    numero_doc: "76553808",
    departamento: {
        id: 0,
        nombre: "",
    },
    provincia: {
        id: 0,
        nombre: "",
    },
    distrito: "",
    direccion: "Los Olivos",
    correo: "joseph@gmail.com",
    celular: "927834271",
    genero: "masculino",
    ocupacion: "Estudio y Dota 2",
    rentabilidad: {
        id: 0,
        porcentaje: 0,
    },
    vigencia_contrato: "",
    moneda: "S/",
    capital: "",
    fecha_inicio: "",
    fecha_fin: "",
    banco_cliente: "",
    tipo_cuenta_cliente: "",
    numero_cuenta_cliente: "123456789",
    numero_cci_cliente: "123456789123",
    banco_gjg: {
        nombre: "",
        cuenta: "",
    },

    dni_anverso: new File([""], ""),
    dni_reverso: new File([""], ""),
    declaracion_jurada: [new File([""], "")],
    sustento_declaracion_jurada: [new File([""], "")],
    comprobantes_pago: [new File([""], "")],
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
