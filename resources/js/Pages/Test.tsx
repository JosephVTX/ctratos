import React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5">
            {typeof children}
        </div>
    );
};

export default function Test({areas}) {

    const [areas_, setAreas] = React.useState(areas);

    console.log(areas_);
    
    return (
        <div>
            <DataTable
                value={areas_}
                reorderableColumns
                reorderableRows
                onRowReorder={(e) => setAreas(e.value)}
                tableStyle={{ minWidth: "50rem" }}
            >
                <Column rowReorder style={{ width: "3rem" }} />
                <Column field="id" header="ID" />
                <Column field="departamento" header="Name" />
            </DataTable>
        </div>
    );
}
