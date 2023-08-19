import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Avatar } from "primereact/avatar";

import { Column } from "primereact/column";
import { DataTable, DataTableExpandedRows } from "primereact/datatable";
import { useState } from "react";

type User = {
    id: number;
    name: string;
};

type Area = {
    id: number;
    departamento: string;
    direccion: string;
    supervisor_id: string;
    users: User[];
};

type Supervisor = {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
};

type Props = {
    areas: Area[];
    supervisores: Supervisor[];
    users: User[];
};

export default function Index({ areas, supervisores, users }: Props) {
    const [expandedRows, setExpandedRows] = useState<
        any[] | DataTableExpandedRows
    >();


    const rowExpansionTemplate = (data: Area) => {
        return (
            <div className="p-3  space-y-4">
                <h4 className="text-lg font-bold">
                    Usuarios de {data.departamento}
                </h4>
                <DataTable className="shadow" showGridlines value={data.users}>
                    <Column field="id" header="ID" />

                    <Column field="name" header="Nombres" />
                    <Column field="username" header="Usuario" />
                    <Column field="email" header="Correo" />
                    <Column field="codigo" header="Código" />
                    <Column field="estado" header="Estado" />
                </DataTable>
            </div>
        );
    };

    const allowExpansion = (data: Area) => {
        return data.users.length > 0;
    };

    return (
        <AuthenticatedLayout>
            <DataTable
                showGridlines
                className="shadow"
                scrollHeight="80vh"
                scrollable
                value={areas}
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                rowExpansionTemplate={rowExpansionTemplate}
            >
                <Column expander={allowExpansion} />

                <Column field="departamento" header="Area" />
                <Column field="direccion" header="Dirección" />
                <Column field="supervisor.user.name" header="Supervisor" />
            </DataTable>
        </AuthenticatedLayout>
    );
}
