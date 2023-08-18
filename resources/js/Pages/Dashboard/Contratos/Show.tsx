import CortoPlazo from "@/Templates/Contratos/Show/CortoPlazo";
import { Head, usePage } from "@inertiajs/react";

export type Props = {
    query: {
        logo: string | undefined;
    } | null;
};

export default function Show({ contrato }) {
    const { query } = usePage<Props>().props;


    

    return (
        <>
            <Head title="Corto Plazo" />
            <CortoPlazo logo={query?.logo} {...contrato} />;
        </>
    );
}
