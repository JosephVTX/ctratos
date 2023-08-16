import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";

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

        value: "masculini",
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
    }

];

const bancoGJGSolesOptions = [
    {
        label: "Banco Interbank Soles",
        value: "2003004202994",
    },
    {
        label: "Banco BBVA Soles",
        value: "001103680100051143",
    },
];

const bancoGJGDolaresOptions = [
    {
        label: "Banco Interbank Dólares",
        value: "2003004203000",
    },
    {
        label: "Banco BBVA Dólares",
        value: "001103680100051151",
    },
];
    

type Props = {
    departamentos: [
        {
            id: number;
            nombre: string;
        }
    ];

    provincias: [
        {
            id: number;
            nombre: string;
            departamento_id: number;
        }
    ];

    distritos: [
        {
            id: number;
            nombre: string;
            provincia_id: number;
        }
    ];

    tipo_contratos: [
        {
            id: number;
            nombre: string;
        }
    ];

    rentabilidades: [
        {
            id: number;

            porcentaje: number;

            tipo_contrato_id: number;
        }
    ];

    vigencia_contratos: [
        {
            id: number;
            cantidad: number;
            unidad: string;
            rentabilidad_id: number;
        }
    ];
};

export default function Create({
    departamentos,
    provincias,
    distritos,
    tipo_contratos,
    rentabilidades,
    vigencia_contratos,
}: Props) {
    const { data, setData, errors, post } = useForm({
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
        distrito: 0,
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
        declaracion_jurada: "",
        sustento_declaracion_jurada: "",
        comprobantes_pago: "",
    });

    console.log(data);

    return (
        <AuthenticatedLayout headTitle="Crear Contrato">
            <form className="space-y-8">
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Datos del Cliente</h4>
                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Nombres" htmlFor="nombres" />
                            <InputText
                                id="nombres"
                                value={data.nombres}
                                name="nombres"
                                onChange={(e) =>
                                    setData("nombres", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel value="Apellidos" htmlFor="apellidos" />
                            <InputText
                                id="apellidos"
                                value={data.apellidos}
                                name="apellidos"
                                onChange={(e) =>
                                    setData("apellidos", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Tipo de Documento"
                                htmlFor="tipo_doc"
                            />
                            <Dropdown
                                inputId="tipo_doc"
                                className="w-full"
                                value={data.tipo_doc}
                                options={typeDocumentOptions}
                                optionValue="value"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("tipo_doc", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Nº de Doc"
                                htmlFor="numero_doc"
                            />
                            <InputText
                                id="numero_doc"
                                value={data.numero_doc}
                                name="numero_doc"
                                onChange={(e) =>
                                    setData("numero_doc", e.target.value)
                                }
                            />
                        </div>
                    </section>
                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel
                                value="Departamento"
                                htmlFor="departamento"
                            />
                            <Dropdown
                                inputId="departamento"
                                filter
                                className="w-full"
                                value={data.departamento}
                                options={departamentos}
                                optionLabel="nombre"
                                onChange={(e) =>
                                    setData("departamento", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Provincia" htmlFor="provincia" />
                            <Dropdown
                                filter
                                inputId="provincia"
                                className="w-full"
                                value={data.provincia}
                                disabled={!data.departamento.id}
                                options={provincias.filter(
                                    (p) =>
                                        p.departamento_id ===
                                        data.departamento.id
                                )}
                                optionLabel="nombre"
                                onChange={(e) =>
                                    setData("provincia", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Distrito" htmlFor="distrito" />
                            <Dropdown
                                filter
                                className="w-full"
                                disabled={!data.provincia.id}
                                value={data.distrito}
                                options={distritos.filter(
                                    (d) => d.provincia_id === data.provincia.id
                                )}
                                optionLabel="nombre"
                                onChange={(e) =>
                                    setData("distrito", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Dirección" htmlFor="direccion" />
                            <InputText
                                id="direccion"
                                value={data.direccion}
                                name="direccion"
                                onChange={(e) =>
                                    setData("direccion", e.target.value)
                                }
                            />
                        </div>
                    </section>

                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Correo" htmlFor="correo" />
                            <InputText
                                id="correo"
                                value={data.correo}
                                name="correo"
                                onChange={(e) =>
                                    setData("correo", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel value="Celular" htmlFor="celular" />
                            <InputText
                                id="celular"
                                value={data.celular}
                                name="celular"
                                onChange={(e) =>
                                    setData("celular", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Genero del Cliente"
                                htmlFor="genero"
                            />
                            <Dropdown
                                inputId="genero"
                                className="w-full"
                                value={data.genero}
                                options={generoOptions}
                                optionValue="value"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("genero", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Ocupación" htmlFor="ocupacion" />
                            <InputText
                                id="ocupacion"
                                value={data.ocupacion}
                                name="ocupacion"
                                onChange={(e) =>
                                    setData("ocupacion", e.target.value)
                                }
                            />
                        </div>
                    </section>
                </div>
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Opciones de Contrato</h4>
                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel
                                value="Tipo de Contrato"
                                htmlFor="tipo_contrato"
                            />
                            <Dropdown
                                inputId="tipo_contrato"
                                className="w-full"
                                value={data.tipo_contrato}
                                options={tipo_contratos}
                                optionLabel="nombre"
                                onChange={(e) =>
                                    setData("tipo_contrato", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="% de Renta" id="profit" />
                            <Dropdown
                                className="w-full"
                                disabled={!data.tipo_contrato.id}
                                value={data.rentabilidad}
                                options={rentabilidades.filter(
                                    (item) =>
                                        item.tipo_contrato_id ===
                                        data.tipo_contrato.id
                                )}
                                optionLabel="percent"
                                filter
                                valueTemplate={(o) => (
                                    <span className="text-sm">
                                        {o?.porcentaje} %
                                    </span>
                                )}
                                itemTemplate={(o) => (
                                    <span className="text-sm">
                                        {o?.porcentaje} %
                                    </span>
                                )}
                                onChange={(e) =>
                                    setData("rentabilidad", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Vigencia de Contrato"
                                htmlFor="vigencia_contratos"
                            />
                            <Dropdown
                                inputId="vigencia_contratos"
                                className="w-full"
                                disabled={!data.rentabilidad.id}
                                value={data.vigencia_contrato}
                                options={vigencia_contratos.filter(
                                    (v) =>
                                        v.rentabilidad_id ===
                                        data.rentabilidad.id
                                )}
                                optionLabel="cantidad"
                                itemTemplate={(option) => (
                                    <span className="text-sm">
                                        {option?.cantidad} {option?.unidad}
                                    </span>
                                )}
                                onChange={(e) =>
                                    setData("vigencia_contrato", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Capital" id="capital" />

                            <div className="p-inputgroup">
                                <Dropdown
                                    className="!w-5"
                                    panelClassName="!w-5"
                                    value={data.moneda}
                                    options={[
                                        {
                                            label: "PEN",
                                            value: "S/",
                                        },
                                        {
                                            label: "USD",
                                            value: "$",
                                        },
                                    ]}
                                    /*  itemTemplate={(option) => (
                                    <span className="text-sm">
                                        {option.quantity}{" "}
                                        {option.unit === "day"
                                            ? "Días"
                                            : "Meses"}
                                    </span>
                                )} */
                                    onChange={(e) =>
                                        setData("moneda", e.target.value)
                                    }
                                    placeholder="Moneda"
                                />
                                <InputNumber
                                    placeholder="Capital"
                                    onChange={(e) =>
                                        setData(
                                            "capital",
                                            `${data.moneda} ${e.value}`
                                        )
                                    }
                                    mode="currency"
                                    locale={
                                        data.moneda === "S/" ? "es-PE" : "en-US"
                                    }
                                    currency={
                                        data.moneda === "S/" ? "PEN" : "USD"
                                    }
                                />
                            </div>
                        </div>
                    </section>

                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel
                                value="Fecha Inicio"
                                id="fecha_inicio"
                            />
                            <InputText
                                value={data.fecha_inicio}
                                name="fecha_inicio"
                                type="date"
                                onChange={(e) =>
                                    setData("fecha_inicio", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel value="Fecha Fin" id="end_type" />
                            <InputText
                                value={data.fecha_fin}
                                name="fecha_fin"
                                type="date"
                                onChange={(e) =>
                                    setData("fecha_fin", e.target.value)
                                }
                            />
                        </div>
                    </section>
                </div>
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Datos cuenta cliente</h4>
                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Banco del Cliente" htmlFor="banco_cliente" />
                            <Dropdown
                                inputId="banco_cliente"
                                className="w-full"
                                value={data.banco_cliente}
                                filter
                                options={bancoClienteOptions}
                                optionValue="label"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("banco_cliente", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Tipo de Cuenta" htmlFor="tipo_cuenta_cliente" />
                            <Dropdown
                                inputId="tipo_cuenta_cliente"
                                disabled={!data.banco_cliente}
                                className="w-full"
                                value={data.tipo_cuenta_cliente}
                                filter
                                options={[
                                    {
                                        label: "Ahorro",
                                        value: "ahorro",
                                    },
                                    {
                                        label: "Corriente",
                                        value: "corriente",
                                    },
                                ]}
                                onChange={(e) =>
                                    setData("tipo_cuenta_cliente", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Nº de Cuenta"
                                htmlFor="numero_cuenta_cliente"
                            />
                            <InputText
                                id="numero_cuenta_cliente"
                                disabled={!data.tipo_cuenta_cliente}
                                value={data.numero_cuenta_cliente}
                                name="numero_cuenta_cliente"
                                onChange={(e) =>
                                    setData("numero_cuenta_cliente", e.target.value)
                                }
                                keyfilter="num"
                            />
                        </div>
                        <div>
                            <InputLabel value="Nro CCI"  htmlFor="numero_cci_cliente" />
                            <InputText
                                value={data.numero_cci_cliente}
                                disabled={!data.tipo_cuenta_cliente}
                                name="numero_cci_cliente"
                                onChange={(e) =>
                                    setData("numero_cci_cliente", e.target.value)
                                }
                                keyfilter="num"
                            />
                        </div>
                    </section>
                </div>
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Datos cuenta - GJG</h4>
                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel
                                value={`Banco GJG ${
                                    data.moneda === "S/" ? "Soles" : "Dólares"
                                }`}
                                id="bank"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.banco_gjg}
                                options={
                                    data.moneda === "S/"
                                        ? bancoGJGSolesOptions
                                        : bancoGJGDolaresOptions
                                }
                                optionValue="value"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("banco_gjg", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value={`Cuenta en ${
                                    data.moneda === "S/" ? "Soles" : "Dólares"
                                }`}
                                id="apellidos"
                            />
                            <InputText
                                disabled
                                value={data.banco_gjg}
                                name="apellidos"
                            />
                        </div>
                    </section>
                </div>
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Archivos Adjuntos</h4>
                    <section className="lg:grid grid-cols-2 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="DNI Anverso" htmlFor="dni_anverso" />
                            <InputText
                                id="dni_anverso"
                                value={data.dni_anverso}
                                name="dni_anverso"
                                onChange={(e) =>setData("dni_anverso", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                        <div>
                            <InputLabel value="DNI Reverso" htmlFor="dni_reverso" />
                            <InputText
                                id="dni_reverso"
                                value={data.dni_reverso}
                                name="dni_reverso"
                                onChange={(e) =>
                                    setData("dni_reverso", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Declaración Jurada"
                                htmlFor="declaracion_jurada"
                            />
                            <InputText
                                id="declaracion_jurada"
                                value={data.declaracion_jurada}
                                name="declaracion_jurada"
                                onChange={(e) =>
                                    setData("declaracion_jurada", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Sustento Decl. Jurada"
                                htmlFor="sustento_declaracion_jurada"
                            />
                            <InputText
                                id="sustento_declaracion_jurada"
                                value={data.sustento_declaracion_jurada}
                                name="sustento_declaracion_jurada"
                                onChange={(e) =>
                                    setData("sustento_declaracion_jurada", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                    </section>
                    <section className="grid grid-cols-2 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel
                                value="Comprobantes de Pago"
                                htmlFor="comprobantes_pago"
                            />
                            <InputText
                                id="comprobantes_pago"
                                value={data.comprobantes_pago}
                                name="comprobantes_pago"
                                onChange={(e) =>
                                    setData("comprobantes_pago", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                    </section>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
