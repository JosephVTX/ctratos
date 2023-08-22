import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, router, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { useEffect, useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import InputError from "@/Components/InputError";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Section from "@/Components/section/Section";
import InputForm from "@/Components/form/InputForm";
import {
    contratoFormData,
    typeDocumentOptions,
    bancoClienteOptions,
    bancoGJGDolaresOptions,
    bancoGJGSolesOptions,
    generoOptions,
} from "./data/form";
import ComprobantePago from "./partials/ComprobantePago";
import DatosCliente from "./partials/DatosCliente";

export default function Create({
    departamentos,
    provincias,
    distritos,
    tipo_contratos,
    rentabilidades,
    vigencia_contratos,
}: Props) {
    const [openModalPreview, setOpenModalPreview] = useState(false);
    const [withLogo, setWithLogo] = useState(false);

    const { errors } = usePage().props;

    const { data, setData } = useForm({
        ...contratoFormData,
        tipo_contrato: tipo_contratos[0],
        comprobantes_pago_codigo_operacion: [] as string[],
    });

    const [cronograma, setCronograma] = useState<Cronograma | any>({});
    const [cronogramas, setCronogramas] = useState<any[]>([]);

    useEffect(() => {
        if (openModalPreview) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [openModalPreview]);

    const handleAddCronograma = () => {
        console.log(data?.vigencia_contrato.cantidad);

        if (!data.vigencia_contrato.cantidad)
            return alert("No hay vigencia de contrato");

        const cantidad = data.vigencia_contrato?.cantidad;

        const newCronograma = Array.from({ length: cantidad }, (_, i) => {
            const date = new Date(cronograma?.fecha);

            date.setMonth(date.getMonth() + i + 1);

            if (i + 1 === cantidad) {
                return {
                    fecha: date.toISOString().split("T")[0],

                    monto: data.capital,
                };
            }

            return {
                fecha: date.toISOString().split("T")[0],

                monto: cronograma?.monto,
            };
        });

        router.post(route("contratos.cronograma"), cronograma, {
            preserveScroll: true,

            onSuccess: () => {
                setCronogramas([...cronogramas, ...newCronograma]);
            },
        });
    };

    const handlePreview = () => {
        console.log({
            ...data,
            departamento: data.departamento.nombre,
            provincia: data.provincia.nombre,
            tipo_contrato: data.tipo_contrato.nombre,

            rentabilidad: data.rentabilidad,
            numero_cuenta_gjg: data.banco_gjg.cuenta,
            nombre_cuenta_gjg: data.banco_gjg.nombre,
            vigencia_contrato: data.vigencia_contrato,
            banco_gjg: {
                cuenta: data.banco_gjg.cuenta,
                nombre: data.banco_gjg.nombre,
            },
        });

        router.post(
            route("contratos.preview"),
            {
                ...data,
                departamento: data.departamento.nombre,
                provincia: data.provincia.nombre,
                tipo_contrato: data.tipo_contrato.nombre,

                rentabilidad: data.rentabilidad,
                numero_cuenta_gjg: data.banco_gjg.cuenta,
                nombre_cuenta_gjg: data.banco_gjg.nombre,
                vigencia_contrato: data.vigencia_contrato,
                banco_gjg: {
                    cuenta: data.banco_gjg.cuenta,
                    nombre: data.banco_gjg.nombre,
                },
            },
            {
                preserveScroll: true,
                forceFormData: true,

                onSuccess: () => {
                    setOpenModalPreview(true);
                },
            }
        );
    };

    const handleSubmmit = () => {
        const newData = {
            ...data,
            departamento: data.departamento.nombre,
            provincia: data.provincia.nombre,
            tipo_contrato: data.tipo_contrato.nombre,
            tiene_factura: data.tiene_factura,
            comprobantes_pago: data.comprobantes_pago,
            comprobantes_pago_codigo_operacion:
                data.comprobantes_pago_codigo_operacion,
            rentabilidad: data.rentabilidad,
            numero_cuenta_gjg: data.banco_gjg.cuenta,
            nombre_cuenta_gjg: data.banco_gjg.nombre,
            vigencia_contrato: data.vigencia_contrato,
            banco_gjg: {
                cuenta: data.banco_gjg.cuenta,
                nombre: data.banco_gjg.nombre,
            },
        };

        router.post(route("dashboard.contratos.store"), newData, {
            preserveScroll: true,
            forceFormData: true,
        });
    };

    const cronogramaActionTemplate = (_, props) => {
        const { rowIndex } = props;

        return (
            <div className="flex items-center gap-4">
                <Button
                    onClick={() =>
                        setCronogramas(
                            cronogramas.filter((c, i) => i !== rowIndex)
                        )
                    }
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger p-button-outlined"
                />
            </div>
        );
    };

    return (
        <>
            <AuthenticatedLayout headTitle="Crear Contrato">
                <div className="space-y-8 pb-12">
                    <DatosCliente data={data} setData={setData} errors={errors} departamentos={departamentos} distritos={distritos} provincias={provincias} />
                    <Section title="Opciones de Contrato">
                        <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                            <InputForm
                                id="tipo_contrato"
                                title="Tipo de Contrato"
                                error={errors.tipo_contrato}
                            >
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
                            </InputForm>
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
                                    valueTemplate={(o, props) => {
                                        if (o) {
                                            return (
                                                <span className="text-sm">
                                                    {o?.porcentaje} %
                                                </span>
                                            );
                                        }

                                        return props?.placeholder;
                                    }}
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
                                <InputError message={errors.rentabilidad} />
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
                                    valueTemplate={(o, props) => {
                                        if (o) {
                                            return (
                                                <span className="text-sm">
                                                    {o?.cantidad} {o?.unidad}
                                                </span>
                                            );
                                        }

                                        return props?.placeholder;
                                    }}
                                    onChange={(e) =>
                                        setData("vigencia_contrato", e.value)
                                    }
                                    placeholder="Seleccione"
                                />
                                <InputError
                                    message={errors.vigencia_contrato}
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
                                        onChange={(e) =>
                                            setData("moneda", e.target.value)
                                        }
                                        placeholder="Moneda"
                                    />
                                    <InputNumber
                                        placeholder="Capital"
                                        onChange={(e) =>
                                            setData("capital", `${e.value}`)
                                        }
                                        mode="currency"
                                        maxFractionDigits={0.0}
                                        locale={
                                            data.moneda === "S/"
                                                ? "es-PE"
                                                : "en-US"
                                        }
                                        currency={
                                            data.moneda === "S/" ? "PEN" : "USD"
                                        }
                                    />
                                </div>
                                <InputError message={errors.capital} />
                            </div>
                            {/* <div>
                                <InputForm
                                    id="fecha_inicio"
                                    title="Fecha Inicio"
                                    type="date"
                                    error={errors.fecha_inicio}
                                    value={data.fecha_inicio}
                                    onChange={(e) =>
                                        setData("fecha_inicio", e.target.value)
                                    }
                                />
                            </div> */}
                        </section>

                        <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                            <InputForm
                                id="fecha_inicio"
                                title="Fecha Inicio"
                                type="date"
                                error={errors.fecha_inicio}
                                value={data.fecha_inicio}
                                onChange={(e) =>
                                    setData("fecha_inicio", e.target.value)
                                }
                            />

                            <InputForm
                                id="fecha_fin"
                                title="Fecha Fin"
                                type="date"
                                error={errors.fecha_fin}
                                value={data.fecha_fin}
                                onChange={(e) =>
                                    setData("fecha_fin", e.target.value)
                                }
                            />
                            <InputForm
                                id="fecha_venta"
                                title="Fecha Venta del Contrato"
                                type="date"
                                error={errors.fecha_venta}
                                value={data.fecha_venta}
                                onChange={(e) =>
                                    setData("fecha_venta", e.target.value)
                                }
                            />
                            <InputForm id="tiene_venta" title="Tiene Factura">
                                <div className="pt-3">
                                    <InputSwitch
                                        checked={data.tiene_factura}
                                        onChange={(e) =>
                                            setData(
                                                "tiene_factura",
                                                e.value as boolean
                                            )
                                        }
                                    />
                                </div>
                            </InputForm>
                        </section>
                    </Section>

                    {data.tipo_contrato.id !== 1 && (
                        <Section title="Cronograma">
                            <section className="lg:grid grid-cols-12 [&_input]:w-full gap-4">
                                <div className="col-span-3">
                                    <div>
                                        <InputLabel
                                            value="Dia de pago"
                                            htmlFor="tipo_contrato"
                                        />

                                        <InputText
                                            type="date"
                                            onChange={(e) =>
                                                setCronograma({
                                                    ...cronograma,
                                                    fecha: e.target.value,
                                                })
                                            }
                                        />
                                        <InputError message={errors.fecha} />
                                    </div>
                                    <div>
                                        <InputForm
                                            title="Monto"
                                            id="monto"
                                            error={errors.monto}
                                        >
                                            <InputNumber
                                                inputId="currency-us"
                                                mode="currency"
                                                currency={
                                                    data.moneda === "S/"
                                                        ? "PEN"
                                                        : "USD"
                                                }
                                                locale={
                                                    data.moneda === "S/"
                                                        ? "es-PE"
                                                        : "en-US"
                                                }
                                                className="w-full my-4"
                                                placeholder="Monto Mensual a Recibir"
                                                onChange={(e) =>
                                                    setCronograma({
                                                        ...cronograma,
                                                        monto: e.value,
                                                    })
                                                }
                                            />
                                        </InputForm>

                                        <Button
                                            onClick={handleAddCronograma}
                                            label="Agregar"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-9">
                                    <DataTable
                                        reorderableColumns
                                        reorderableRows
                                        value={cronogramas}
                                        onRowReorder={(e) =>
                                            setCronogramas(e.value)
                                        }
                                        className="w-full"
                                        emptyMessage={
                                            <p className="text-xl">
                                                No hay cronogramas
                                            </p>
                                        }
                                    >
                                        <Column
                                            rowReorder
                                            style={{ width: "3rem" }}
                                        />

                                        <Column field="fecha" header="Fecha" />
                                        <Column field="monto" header="Monto" />
                                        <Column
                                            header="Acciones"
                                            body={cronogramaActionTemplate}
                                        />
                                    </DataTable>
                                </div>
                            </section>
                        </Section>
                    )}
                    <Section title="Datos Cuenta Cliente">
                        <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                            <InputForm
                                title="Banco del Cliente"
                                id="banco_cliente"
                                error={errors.banco_cliente}
                            >
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
                            </InputForm>

                            <InputForm
                                title="Tipo de Cuenta"
                                id="tipo_cuenta_cliente"
                                error={errors.tipo_cuenta_cliente}
                            >
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
                                        setData(
                                            "tipo_cuenta_cliente",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Seleccione"
                                />
                            </InputForm>

                            <InputForm
                                title="Nº de Cuenta"
                                id="numero_cuenta_cliente"
                                error={errors.numero_cuenta_cliente}
                                value={data.numero_cuenta_cliente}
                                onChange={(e) =>
                                    setData(
                                        "numero_cuenta_cliente",
                                        e.target.value
                                    )
                                }
                            />
                            <InputForm
                                title="Nro CCI"
                                id="numero_cci_cliente"
                                value={data.numero_cci_cliente}
                                onChange={(e) =>
                                    setData(
                                        "numero_cci_cliente",
                                        e.target.value
                                    )
                                }
                                error={errors.numero_cci_cliente}
                            />
                        </section>
                    </Section>
                    <Section title="Datos cuenta - GJG">
                        <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                            <InputForm
                                id="banco_gjg"
                                title={`Banco GJG ${
                                    data.moneda === "S/" ? "Soles" : "Dólares"
                                }`}
                                error={errors.banco_gjg}
                            >
                                <Dropdown
                                    inputId="banco_gjg"
                                    className="w-full"
                                    value={data.banco_gjg}
                                    options={
                                        data.moneda === "S/"
                                            ? bancoGJGSolesOptions
                                            : bancoGJGDolaresOptions
                                    }
                                    optionLabel="nombre"
                                    onChange={(e) =>
                                        setData("banco_gjg", e.value)
                                    }
                                    placeholder="Seleccione"
                                />
                            </InputForm>
                            <div>
                                <InputLabel
                                    value={`Cuenta en ${
                                        data.moneda === "S/"
                                            ? "Soles"
                                            : "Dólares"
                                    }`}
                                    id="apellidos"
                                />
                                <InputText
                                    disabled
                                    value={data.banco_gjg.cuenta}
                                    name="apellidos"
                                />
                                <InputError message={errors.banco_gjg} />
                            </div>
                        </section>
                    </Section>
                    <Section title="Archivos Adjuntos">
                        <section className="lg:grid grid-cols-2 [&_input]:w-full gap-4">
                            <div>
                                <InputLabel
                                    value="DNI Anverso"
                                    htmlFor="dni_anverso"
                                />
                                <InputText
                                    id="dni_anverso"
                                    name="dni_anverso"
                                    onChange={(e) =>
                                        setData(
                                            "dni_anverso",
                                            e.target.files![0]
                                        )
                                    }
                                    type="file"
                                    accept="image/jpeg,jpg,png,webp"
                                />
                                <InputError message={errors.dni_anverso} />
                            </div>

                            <div>
                                <InputLabel
                                    value="DNI Reverso"
                                    htmlFor="dni_reverso"
                                />
                                <InputText
                                    id="dni_reverso"
                                    name="dni_reverso"
                                    onChange={(e) =>
                                        setData(
                                            "dni_reverso",
                                            e.target.files![0]
                                        )
                                    }
                                    type="file"
                                    accept="image/jpeg,jpg,png,webp"
                                />
                                <InputError message={errors.dni_reverso} />
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="comprobantes_pago">
                                        Comprobantes de Pago
                                    </label>
                                    <ComprobantePago
                                        setData={setData}
                                        errors={errors}
                                        data={data}
                                        comprobantes_pago={
                                            data.comprobantes_pago
                                        }
                                        comprobantes_pago_codigo_operacion={
                                            data.comprobantes_pago_codigo_operacion
                                        }
                                    />
                                </div>
                                <InputText
                                    id="comprobantes_pago"
                                    name="comprobantes_pago"
                                    onChange={(e) =>
                                        setData("comprobantes_pago", [
                                            ...e.target.files!,
                                        ])
                                    }
                                    type="file"
                                    accept=".png,.jpg,.jpeg,.webp, .pdf"
                                    multiple
                                />
                                <InputError
                                    message={errors.comprobantes_pago}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    value="Declaración Jurada"
                                    htmlFor="declaracion_jurada"
                                />
                                <InputText
                                    id="declaracion_jurada"
                                    name="declaracion_jurada"
                                    onChange={(e) =>
                                        setData("declaracion_jurada", [
                                            ...e.target.files!,
                                        ])
                                    }
                                    type="file"
                                    accept=".png,.jpg,.jpeg,.webp, .pdf"
                                    multiple
                                />
                                <InputError
                                    message={errors.declaracion_jurada}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    value="Sustento Decl. Jurada"
                                    htmlFor="sustento_declaracion_jurada"
                                />
                                <InputText
                                    id="sustento_declaracion_jurada"
                                    name="sustento_declaracion_jurada"
                                    onChange={(e) =>
                                        setData("sustento_declaracion_jurada", [
                                            ...e.target.files!,
                                        ])
                                    }
                                    type="file"
                                    accept=".png,.jpg,.jpeg,.webp, .pdf"
                                    multiple
                                />
                                <InputError
                                    message={errors.sustento_declaracion_jurada}
                                />
                            </div>
                        </section>
                    </Section>
                </div>
            </AuthenticatedLayout>

            {openModalPreview && (
                <div className="bg-black fixed h-screen overflow-scroll w-screen top-0 left-0 z-[100] pb-16">
                    {/* <CortoPlazo logo={withLogo} {...data} /> */}
                </div>
            )}
            <div className="fixed bottom-0 z-[1000]  w-full bg-base-200 shadow-2xl border p-4 flex justify-end gap-4 items-center">
                <section className={openModalPreview ? "visible" : "invisible"}>
                    <div className="flex items-center gap-4">
                        <h4>Mostrar Logo</h4>
                        <InputSwitch
                            checked={withLogo}
                            onChange={(e) => setWithLogo(e.value as boolean)}
                        />
                    </div>
                </section>
                <section className="space-x-4">
                    {openModalPreview ? (
                        <>
                            <Button
                                onClick={() => setOpenModalPreview(false)}
                                severity="secondary"
                                label="Cancelar"
                            />
                            <Button onClick={handleSubmmit} label="Guardar" />
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() =>
                                    router.get(
                                        route("dashboard.contratos.index")
                                    )
                                }
                                severity="secondary"
                                label="Cancelar"
                            />
                            <Button
                                onClick={handlePreview}
                                label="Previsualizar"
                            />
                        </>
                    )}
                </section>
            </div>
        </>
    );
}
