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

const genderOptions = [
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
    departament: [
        {
            id: number;
            name: string;
            created_at: string;
            updated_at: string;
        }
    ];

    province: [
        {
            id: number;
            name: string;
            departament_id: number;
            created_at: string;
            updated_at: string;
        }
    ];

    district: [
        {
            id: number;
            name: string;
            province_id: number;
            created_at: string;
            updated_at: string;
        }
    ];

    contract_type: [
        {
            id: number;
            name: string;
            description: string;
            created_at: string;
            updated_at: string;
        }
    ];

    profit: [
        {
            id: number;
            percent: string;
            contract_type_id: number;
            created_at: string;
            updated_at: string;
        }
    ];

    contract_validities: [
        {
            id: number;
            quantity: number;
            unit: string;
            profit_id: number;
        }
    ];

    bank: [
        {
            id: number;
            name: string;
        }
    ];
};

export default function Create({
    departament,
    province,
    district,
    contract_type,
    profit,
    contract_validities,
    bank,
}: Props) {
    const { data, setData, errors, post } = useForm({
        first_name: "",
        last_name: "",
        document_type: "",
        document_number: "",
        departament: 0,
        province: 0,
        district: "",
        address: "",
        email: "",
        phone: "",
        gender: "",
        ocupation: "",
        contract_type: contract_type[0].id,
        profit: 0,
        contract_validity: "",
        capital: "",
        currency: "",
        start_date: "",
        end_date: "",
        client_bank: "",
        gjg_bank: "",
        type_account_bank: "",
    });

    console.log(data.capital);

    return (
        <AuthenticatedLayout headTitle="Crear Contrato">
            <form className="space-y-8">
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Datos del Cliente</h4>
                    <section className="grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Nombres" id="first_name" />
                            <InputText
                                value={data.first_name}
                                name="first_name"
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel value="Apellidos" id="last_name" />
                            <InputText
                                value={data.last_name}
                                name="last_name"
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Tipo de Doc"
                                id="document_type"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.document_type}
                                options={typeDocumentOptions}
                                optionValue="value"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("document_type", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Nº de Doc"
                                id="document_number"
                            />
                            <InputText
                                value={data.document_number}
                                name="document_number"
                                onChange={(e) =>
                                    setData("document_number", e.target.value)
                                }
                            />
                        </div>
                    </section>
                    <section className="grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Departamento" id="departament" />
                            <Dropdown
                                filter
                                className="w-full"
                                value={data.departament}
                                options={departament}
                                optionValue="id"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("departament", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Provincia" id="province" />
                            <Dropdown
                                filter
                                className="w-full"
                                value={data.province}
                                disabled={!data.departament}
                                options={province.filter(
                                    (item) =>
                                        item.departament_id === data.departament
                                )}
                                optionValue="id"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("province", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Distrito" id="district" />
                            <Dropdown
                                className="w-full"
                                disabled={!data.province}
                                value={data.district}
                                options={district.filter(
                                    (item) => item.province_id === data.province
                                )}
                                optionValue="id"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("district", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Dirección" id="address" />
                            <InputText
                                value={data.address}
                                name="address"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </div>
                    </section>

                    <section className="grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Correo" id="email" />
                            <InputText
                                value={data.email}
                                name="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel value="Celular" id="phone" />
                            <InputText
                                value={data.phone}
                                name="phone"
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Genero del Cliente"
                                id="gender"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.gender}
                                options={genderOptions}
                                optionValue="value"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Ocupación" id="ocupation" />
                            <InputText
                                value={data.ocupation}
                                name="ocupation"
                                onChange={(e) =>
                                    setData("ocupation", e.target.value)
                                }
                            />
                        </div>
                    </section>
                </div>

                {/* Opciones de Contrato */}

                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Opciones de Contrato</h4>
                    <section className="grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel
                                value="Tipo de Contrato"
                                id="contract_type"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.contract_type}
                                options={contract_type}
                                optionValue="id"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("contract_type", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="% de Renta" id="profit" />
                            <Dropdown
                                className="w-full"
                                disabled={!data.contract_type}
                                value={data.profit}
                                options={profit.filter(
                                    (item) =>
                                        item.contract_type_id ===
                                        data.contract_type
                                )}
                                optionValue="id"
                                optionLabel="percent"
                                filter
                                valueTemplate={(option) => (
                                    <span className="text-sm">
                                        {option?.percent} %
                                    </span>
                                )}
                                itemTemplate={(option) => (
                                    <span className="text-sm">
                                        {option?.percent} %
                                    </span>
                                )}
                                onChange={(e) =>
                                    setData("profit", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Vigencia de Contrato"
                                id="contract_validity"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.contract_validity}
                                options={contract_validities.filter(
                                    (item) => item.profit_id === data.profit
                                )}
                                optionValue="id"
                                optionLabel="quantity"
                                itemTemplate={(option) => (
                                    <span className="text-sm">
                                        {option.quantity}{" "}
                                        {option.unit === "day"
                                            ? "Días"
                                            : "Meses"}
                                    </span>
                                )}
                                onChange={(e) =>
                                    setData("contract_validity", e.target.value)
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
                                    value={data.currency}
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
                                        setData("currency", e.target.value)
                                    }
                                    placeholder="Moneda"
                                />
                                <InputNumber
                                    placeholder="Capital"
                                    onChange={(e) =>
                                        setData(
                                            "capital",
                                            `${data.currency} ${e.value}`
                                        )
                                    }
                                    mode="currency"
                                    locale={
                                        data.currency === "S/"
                                            ? "es-PE"
                                            : "en-US"
                                    }
                                    currency={
                                        data.currency === "S/" ? "PEN" : "USD"
                                    }
                                />
                            </div>
                        </div>
                    </section>
                    <section className="grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Fecha Inicio" id="start_date" />
                            <InputText
                                value={data.start_date}
                                name="start_date"
                                type="date"
                                onChange={(e) =>
                                    setData("start_date", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel value="Fecha Fin" id="end_type" />
                            <InputText
                                value={data.end_date}
                                name="end_date"
                                type="date"
                                onChange={(e) =>
                                    setData("end_date", e.target.value)
                                }
                            />
                        </div>
                    </section>
                </div>
                {data.contract_type !== 1 && (
                    <div
                        className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                        id="client_data"
                    >
                        <h4 className="font-semibold">Cronograma</h4>
                        <section className="grid grid-cols-12 [&_input]:w-full gap-4">
                            <div className="col-span-4 md:col-span-4">
                                <div className="space-y-2">
                                    <div>
                                        <InputLabel
                                            value="Dia de pago"
                                            id="end_type"
                                        />
                                        <InputText
                                            value={data.end_date}
                                            name="end_date"
                                            type="date"
                                            onChange={(e) =>
                                                setData(
                                                    "end_date",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            value="Monto Mensual a Recibir"
                                            id="end_type"
                                        />
                                        <InputText
                                            value={data.end_date}
                                            name="end_date"
                                            type="date"
                                            onChange={(e) =>
                                                setData(
                                                    "end_date",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Button
                                            label="Agregar"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-8">
                                <DataTable
                                    value={[]}
                                    className="p-datatable-striped p-datatable-gridlines"
                                >
                                    <Column field="fecha" header="Fecha" />
                                    <Column field="monto" header="Monto" />
                                    <Column header="Eliminar" />
                                </DataTable>
                            </div>
                        </section>
                    </div>
                )}
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Datos cuenta cliente</h4>
                    <section className="grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Banco del Cliente" id="bank" />
                            <Dropdown
                                className="w-full"
                                value={data.client_bank}
                                filter
                                options={bank}
                                optionValue="name"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("client_bank", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Tipo de Cuenta" id="last_name" />
                            <Dropdown
                                className="w-full"
                                value={data.type_account_bank}
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
                                    setData("type_account_bank", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Nº de Cuenta"
                                id="document_type"
                            />
                            <InputText
                                value={data.document_number}
                                name="document_number"
                                onChange={(e) =>
                                    setData("document_number", e.target.value)
                                }
                                keyfilter="num"
                            />
                        </div>
                        <div>
                            <InputLabel value="Nro CCI" id="document_number" />
                            <InputText
                                value={data.document_number}
                                name="document_number"
                                onChange={(e) =>
                                    setData("document_number", e.target.value)
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
                    <section className="grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value={`Banco GJG ${data.currency === "S/" ? "Soles" : "Dólares"}`} id="bank" />
                            <Dropdown
                                className="w-full"
                                value={data.gjg_bank}
                                options={
                                    data.currency === "S/"
                                        ? [
                                              {
                                                  label: `Banco Interbank Soles`,
                                                  value: "2003004202994",
                                              },
                                              {
                                                  label: `Banco BBVA Soles`,
                                                    value: "001103680100051143",
                                              },
                                          ]
                                        : [
                                              {
                                                  label: `Banco Interbank Dólares`,
                                                  value: "2003004203000",
                                              },
                                              {
                                                  label: `Banco BBVA Dólares`,
                                                    value: "001103680100051151",
                                              },
                                          ]
                                }
                                optionValue="value"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("gjg_bank", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value={`Cuenta en ${data.currency === "S/" ? "Soles" : "Dólares"}`} id="last_name" />
                            <InputText 
                                disabled
                                value={data.gjg_bank}
                                name="last_name"
                                
                            />
                        </div>
                    </section>
                </div>
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Archivos Adjuntos</h4>
                    <section className="grid grid-cols-2 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="DNI" id="first_name" />
                            <InputText
                                value={data.first_name}
                                name="first_name"
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                        <div>
                            <InputLabel value="DNI Reverso" id="last_name" />
                            <InputText
                                value={data.last_name}
                                name="last_name"
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Tipo de Doc"
                                id="document_type"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.document_type}
                                options={typeDocumentOptions}
                                optionValue="value"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("document_type", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Nº de Doc"
                                id="document_number"
                            />
                            <InputText
                                value={data.document_number}
                                name="document_number"
                                onChange={(e) =>
                                    setData("document_number", e.target.value)
                                }
                            />
                        </div>
                    </section>
                    <section className="grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Departamento" id="departament" />
                            <Dropdown
                                filter
                                className="w-full"
                                value={data.departament}
                                options={departament}
                                optionValue="id"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("departament", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Provincia" id="province" />
                            <Dropdown
                                filter
                                className="w-full"
                                value={data.province}
                                disabled={!data.departament}
                                options={province.filter(
                                    (item) =>
                                        item.departament_id === data.departament
                                )}
                                optionValue="id"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("province", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Distrito" id="district" />
                            <Dropdown
                                className="w-full"
                                disabled={!data.province}
                                value={data.district}
                                options={district.filter(
                                    (item) => item.province_id === data.province
                                )}
                                optionValue="id"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("district", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Dirección" id="address" />
                            <InputText
                                value={data.address}
                                name="address"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </div>
                    </section>

                    <section className="grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Correo" id="email" />
                            <InputText
                                value={data.email}
                                name="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel value="Celular" id="phone" />
                            <InputText
                                value={data.phone}
                                name="phone"
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Genero del Cliente"
                                id="gender"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.gender}
                                options={genderOptions}
                                optionValue="value"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Ocupación" id="ocupation" />
                            <InputText
                                value={data.ocupation}
                                name="ocupation"
                                onChange={(e) =>
                                    setData("ocupation", e.target.value)
                                }
                            />
                        </div>
                    </section>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
