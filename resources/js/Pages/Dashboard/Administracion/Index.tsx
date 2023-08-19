import useSearch from "@/Hooks/useSearch";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toolbar } from "primereact/toolbar";
import { useRef, useState } from "react";
import CrearUsuario from "./Partials/CrearUsuario";
import { router } from "@inertiajs/react";
import EditarUsuario from "./Partials/EditarUsuario";
import Roles from "@/Components/protect/Roles";

export default function Index({ users, areas }) {
    const toast = useRef<Toast | never>(null);

    const [inputValue, setInputValue] = useSearch("search");

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

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
        </div>
    );
    const endContent = (
        <div className="flex items-center gap-4">
            <Button
                onClick={() => setOpenCreateModal(true)}
                label="Nuevo Usuario"
            />
        </div>
    );

    const rolesBodyTemplate = (rowData) => {
        return (
            <div className="flex flex-col">
                {rowData.roles.map((role) => (
                    <span key={role.id}>{role.name}</span>
                ))}
            </div>
        );
    };

    const areasBodyTemplate = (rowData) => {
        return (
            <div className="flex flex-col">
                {rowData.areas.map((area) => (
                    <span key={area.id}>{area.departamento}</span>
                ))}
            </div>
        );
    };

    const handleDeleteUser = (id) => {
        router.delete(route("user.destroy", id), {
            onSuccess: () => {
                toast.current!.show({
                    severity: "success",
                    summary: "Usuario eliminado",
                    detail: "El usuario ha sido eliminado correctamente",
                    life: 3000,
                });
            },
        });
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex items-center gap-4">
                <Button
                    onClick={() => {
                        setCurrentUser(rowData);
                        setOpenEditModal(true);
                    }}
                    className="p-button-rounded p-button-success p-button-text"
                    icon="pi pi-pencil"
                />

                <Button
                    onClick={() => handleDeleteUser(rowData.id)}
                    className="p-button-rounded p-button-danger p-button-text"
                    icon="pi pi-trash"
                />
            </div>
        );
    };

    return (
        <>
            <AuthenticatedLayout headTitle="Administración">
                <Toolbar start={startContent} end={endContent} />
                <DataTable
                    showGridlines
                    paginator
                    rows={10}
                    className="shadow"
                    scrollHeight="60vh"
                    value={users}
                >
                    <Column sortable field="name" header="Nombre" />
                    <Column sortable field="email" header="Correo" />
                    <Column sortable body={rolesBodyTemplate} header="Rol" />
                    <Column sortable body={areasBodyTemplate} header="Area" />
                    <Column sortable field="estado" header="Estado" />
                    <Column body={actionBodyTemplate} header="Acciones" />
                </DataTable>
            </AuthenticatedLayout>

            <Dialog
                header="Crear Usuario"
                className="w-4/12"
                visible={openCreateModal}
                onHide={() => setOpenCreateModal(false)}
            >
                <CrearUsuario setClose={setOpenCreateModal} areas={areas} />
            </Dialog>
            <Dialog
                header="Editar Usuario"
                className="w-4/12"
                visible={openEditModal}
                onHide={() => setOpenEditModal(false)}
            >
                <EditarUsuario
                    currentUser={currentUser}
                    setClose={setOpenEditModal}
                    areas={areas}
                />
            </Dialog>

            <Toast ref={toast} />

            <Roles roles={["Supervisor", "Tecnico"]}>XD</Roles>
        </>
    );
}
