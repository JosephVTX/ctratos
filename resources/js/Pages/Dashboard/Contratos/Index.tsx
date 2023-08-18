import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import useSearch from "@/Hooks/useSearch";
import { Button } from "primereact/button";
import { Link, router, usePage } from "@inertiajs/react";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import CortoPlazo, { Props } from "@/Templates/Contratos/Show/CortoPlazo";
import { Dropdown } from "primereact/dropdown";

export default function Index({ contratos }) {
    const [inputValue, setInputValue] = useSearch("search");
    const [inputValueContrato, setInputValueContrato] =
        useSearch("tipo_contrato");
    const [inputValueMoneda, setInputValueMoneda] = useSearch("moneda");

    const [currentContrato, setCurrentContrato] = useState({});

    const [openDialog, setOpenDialog] = useState(false);
    const [withLogo, setWithLogo] = useState(false);


    const handleClear = () => {

        setInputValue("");
        setInputValueContrato("");
        setInputValueMoneda("");
    };

    const startContent = (
        <div className="flex items-center gap-4">
            <span className="relative">
                <i className="pi pi-search absolute top-1/2 -translate-y-1/2 ml-2" />
                <InputText
                    type="search"
                    placeholder="Buscar"
                    className="pl-8"
                    value={inputValue || ""}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </span>

            <Dropdown
                value={inputValueContrato}
                placeholder="Filtrar Contrato"
                options={[
                    { label: "Corto Plazo", value: "Corto Plazo" },
                    { label: "Mediano Plazo", value: "Mediano Plazo" },
                ]}
                onChange={(e) => setInputValueContrato(e.target.value)}
            />
            <Dropdown
                value={inputValueMoneda}
                placeholder="Filtrar Moneda"
                options={[
                    { label: "Soles", value: "S/" },
                    { label: "Dolares", value: "$" },
                ]}
                onChange={(e) => setInputValueMoneda(e.target.value)}
            />

            <Button label="Limpiar" onClick={handleClear} className="p-button-secondary" />
        </div>
    );
    const endContent = (
        <div className="flex items-center gap-4">
            <Button
                onClick={() => router.get(route("dashboard.contratos.create"))}
                label="Nuevo Contrato"
            />
        </div>
    );

    const capitalTemplate = (rowData) => {
        return (
            <div className="flex justify-between">
                <span>{rowData.moneda} </span>

                <span>{rowData.capital}</span>
            </div>
        );
    };

    const docTemplate = (rowData) => {
        return (
            <div className="flex flex-col items-center">
                <p>{rowData.tipo_doc} </p>
                <p>{rowData.numero_doc}</p>
            </div>
        );
    };

    const docLogoAction = (rowData) => {
        return (
            <div className="flex items-center gap-4 justify-center">
                <Button
                    onClick={() => {
                        setCurrentContrato(rowData);
                        setOpenDialog(true);
                        setWithLogo(true);
                    }}
                    icon="pi pi-eye"
                />
            </div>
        );
    };

    const docAction = (rowData) => {
        return (
            <div className="flex items-center gap-4 justify-center">
                <Button
                    onClick={() => {
                        setCurrentContrato(rowData);
                        setOpenDialog(true);
                        setWithLogo(false);
                    }}
                    icon="pi pi-eye"
                />
            </div>
        );
    };

    console.log(currentContrato, "currentContrato");

    return (
        <>
            <AuthenticatedLayout>
                <Toolbar start={startContent} end={endContent} />
                <DataTable
                    paginator
                    rows={20}
                    scrollHeight="70vh"
                    value={contratos}
                    showGridlines
                    className="[&_tbody]:text-[17px]"
                >
                    <Column sortable field="id" header="Correlativo" />
                    <Column sortable body={docTemplate} header="Nº Identidad" />
                    <Column sortable field="nombres" header="Cliente" />
                    <Column sortable field="tipo_contrato" header="Plan" />
                    <Column
                        sortable
                        field="capital"
                        body={capitalTemplate}
                        header="Monto Invertido"
                    />
                    <Column
                        sortable
                        field="created_at"
                        header="Fecha Creación"
                    />
                    <Column sortable field="celular" header="Celular" />
                    <Column
                        sortable
                        field="created_at"
                        header="Fecha Creación"
                    />
                    <Column sortable field="area.departamento" header="Grupo" />
                    <Column sortable field="user.name" header="Asesor" />
                    <Column body={docLogoAction} header="Documento con Logo" />
                    <Column body={docAction} header="Documento sin Logo" />
                </DataTable>
            </AuthenticatedLayout>

            <Dialog
                header={`Contrato ${withLogo ? "con" : "sin"} Logo`}
                maximizable
                maskClassName="h-screen"
                visible={openDialog}
                onHide={() => setOpenDialog(false)}
            >
                {currentContrato && (
                    <CortoPlazo
                        logo={withLogo}
                        {...(currentContrato as Props)}
                    />
                )}
            </Dialog>
        </>
    );
}
