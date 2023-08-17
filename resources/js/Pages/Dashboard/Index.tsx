import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Avatar } from "primereact/avatar";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

type Area = {
    id: number;
    departamento: string;
    direccion: string;
    supervisor_id: string;
};

type Supervisor = {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
};

type User = {
    id: number;
    name: string;
};

type Props = {
    areas: Area[];
    supervisores: Supervisor[];
    users: User[];
};

export default function Index({ areas, supervisores, users }: Props) {
    console.log(users);

    const supervisorBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <Avatar
                    label={rowData.area.supervisor.nombre[0]}
                    shape="circle"
                    style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                />
                <div className="flex flex-col">
                    <p className="font-bold">
                        {rowData.area.supervisor.nombre}
                    </p>

                    <p>{rowData.area.departamento}</p>
                </div>
            </div>
        );
    };

    return (
        <AuthenticatedLayout>
            <DataTable
                className="shadow"
                value={users}
                rowGroupMode="rowspan"
                groupRowsBy="area_id"
                sortField="area_id"
            >
                <Column
                    field="area_id"
                    header="Supervisor"
                    body={supervisorBodyTemplate}
                    style={{ minWidth: "100px" }}
                />
                <Column field="name" header="Nombre" />
                <Column field="email" header="Correo" />
                <Column field="codigo" header="Codigo Asesor" />
            </DataTable>
        </AuthenticatedLayout>
    );
}
