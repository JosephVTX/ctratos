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
};

export default function Create({
    departamentos,
    provincias,
    distritos,
    tipo_contratos,
    rentabilidades,
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
        tipo_contrato: {
            id: 0,
            nombre: "",
        },
        rentabilidad: {
            id: 0,
            porcentaje: 0,
        },
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
                    </section>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
