import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import InputForm from "@/Components/form/InputForm";
import Section from "@/Components/section/Section";
import { router } from "@inertiajs/react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

export default function Cronograma({
    data,
    errors,
    setCronogramas,
    cronogramas,
    cronograma,
    setCronograma,
}) {
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

    const handleAddCronograma = () => {

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
    return (
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
                                currency={data.moneda === "S/" ? "PEN" : "USD"}
                                locale={
                                    data.moneda === "S/" ? "es-PE" : "en-US"
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
                        onRowReorder={(e) => setCronogramas(e.value)}
                        className="w-full"
                        emptyMessage={
                            <p className="text-xl">No hay cronogramas</p>
                        }
                    >
                        <Column rowReorder style={{ width: "3rem" }} />

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
    );
}
