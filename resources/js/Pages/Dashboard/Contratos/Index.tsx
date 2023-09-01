import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Column, ColumnFilterElementTemplateOptions } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import useSearch from "@/Hooks/useSearch";
import { Button } from "primereact/button";
import { router } from "@inertiajs/react";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import CortoPlazo, { Props } from "@/Templates/Contratos/Show/CortoPlazo";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { useRef } from "react";

import { Tag } from "primereact/tag";
import { InputSwitch } from "primereact/inputswitch";
import Can, { CanFn } from "@/Components/protect/Can";
import MedianoPlazo from "@/Templates/Contratos/Show/MedianoPlazo";

const getSeverity = (status: string) => {
    switch (status) {
        case "Rechazado":
            return "danger";

        case "Aprobado":
            return "success";

        case "Revision":
            return "warning";

        default:
            return "info";
    }
};

const estadoBodyTemplate = (rowData: any) => {
    return (
        <Tag value={rowData.estado} severity={getSeverity(rowData.estado)} />
    );
};

export default function Index({ contratos }: { contratos: Contrato[] }) {
    const [statuses] = useState(["Revision", "Aprobado", "Rechazado"]);
    const toast = useRef<Toast | never>(null);
    const [inputValue, setInputValue] = useSearch("search");
    const [inputValueContrato, setInputValueContrato] =
        useSearch("tipo_contrato");
    const [inputValueMoneda, setInputValueMoneda] = useSearch("moneda");

    const [currentContrato, setCurrentContrato] = useState<any>();

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

            <Button
                label="Limpiar"
                onClick={handleClear}
                className="p-button-secondary"
            />
        </div>
    );
    const endContent = (
        <Can value="dashboard.contratos.create">
            <div className="flex items-center gap-4">
                <Button
                    onClick={() =>
                        router.get(route("dashboard.contratos.create"))
                    }
                    label="Nuevo Contrato"
                />
            </div>
        </Can>
    );

    const capitalTemplate = (rowData: Contrato) => {
        return (
            <div className="flex justify-between">
                <span>{rowData.moneda} </span>

                <span>{rowData.capital}</span>
            </div>
        );
    };

    const docTemplate = (rowData: Contrato) => {
        return (
            <div className="flex flex-col items-center">
                <p>{rowData.tipo_doc} </p>
                <p>{rowData.numero_doc}</p>
            </div>
        );
    };

    const docLogoAction = (rowData: Contrato) => {
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

    const docAction = (rowData: Contrato) => {
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

    const statusRowFilterTemplate = (
        options: ColumnFilterElementTemplateOptions
    ) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.filterApplyCallback(e.value)}
                placeholder="Seleccionar Estado"
                className="p-column-filter"
                showClear
                style={{ minWidth: "12rem" }}
            />
        );
    };

    const handleCheckContrato = () => {
        router.patch(
            route("dashboard.contratos.update", currentContrato!.id),
            {
                estado: "Aprobado",
            },
            {
                onSuccess: () => {
                    toast.current!.show({
                        severity: "success",
                        summary: "Contrato Aprobado",
                        detail: "Contrato Aprobado Correctamente",
                        life: 3000,
                    });

                    setOpenDialog(false);
                },

                onError: () =>
                    toast.current!.show({
                        severity: "error",
                        summary: "Error",
                        detail: "Ocurrio un error al aprobar el contrato",
                        life: 3000,
                    }),
            }
        );
    };

    const confirm = () => {
        confirmDialog({
            message: "¿Seguro marcar como revisado?",
            header: "Confirmar",
            icon: "pi pi-exclamation-triangle",
            accept: handleCheckContrato,
            acceptLabel: "Si",
        });
    };

    const footerDialog = () => {
        return (
            <Can value="dashboard.contratos.edit">
                <div className="flex items-center justify-end gap-4 mt-4">
                    <Button
                        onClick={confirm}
                        label="Marcar Revisado"
                        className="p-button-success"
                    />
                </div>
            </Can>
        );
    };
    const headerDialog = () => {
        return (
            <div className="flex items-center gap-8">
                <InputSwitch
                    checked={withLogo}
                    onChange={(e) => setWithLogo(e!.value as boolean)}
                />

                <h4 className="opacity-80">
                    Contrato de {currentContrato?.tipo_contrato} con{" "}
                    {withLogo ? "Logo" : "Sin Logo"}
                </h4>
            </div>
        );
    };

    return (
        <>
            <AuthenticatedLayout headTitle="Contratos">
                <Toolbar start={startContent} end={endContent} />
                <DataTable
                    paginator
                    rows={20}
                    scrollHeight="70vh"
                    value={contratos}
                    showGridlines
                    className="[&_tbody]:text-[17px]"
                    scrollable
                    selectionMode="single"
                    rowsPerPageOptions={[5, 10, 25, 50]}
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

                    <Column sortable field="celular" header="Celular" />
                    <Column
                        sortable
                        field="created_at"
                        header="Fecha Creación"
                    />

                    <Column sortable field="area.departamento" header="Grupo" />
                    <Column sortable field="user.name" header="Asesor" />
                    <Column
                        field="estado"
                        header="Estados"
                        filter
                        filterElement={statusRowFilterTemplate}
                        showFilterMenuOptions={false}
                        showApplyButton={false}
                        showClearButton={false}
                        filterField="estado"
                        body={estadoBodyTemplate}
                        rowEditor={false}
                    />

                    {CanFn({ value: "dashboard.contratos.edit" }) && (
                        <Column
                            body={docLogoAction}
                            header="Documento con Logo"
                        />
                    )}
                    {CanFn({ value: "dashboard.contratos.edit" }) && (
                        <Column body={docAction} header="Documento sin Logo" />
                    )}
                </DataTable>
            </AuthenticatedLayout>

            <Dialog
                header={headerDialog}
                maximizable
                maskClassName="h-screen"
                visible={openDialog}
                onHide={() => setOpenDialog(false)}
                footer={footerDialog}
            >
                {currentContrato?.tipo_contrato === "Corto Plazo" ? (
                    <CortoPlazo
                        logo={withLogo}
                        {...(currentContrato as Props)}
                    />
                ) : (
                    <MedianoPlazo
                        logo={withLogo}
                        {...(currentContrato as any)}
                    />
                )}
            </Dialog>
            <ConfirmDialog />
            <Toast ref={toast} />
        </>
    );
}
