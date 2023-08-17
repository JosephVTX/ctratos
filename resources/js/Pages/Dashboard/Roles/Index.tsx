import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

export default function Index({ users }) {
    return (
        <AuthenticatedLayout>
            {<pre>{JSON.stringify(users, null, 2)}</pre>}
        </AuthenticatedLayout>
    );
}
