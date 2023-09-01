import CortoPlazo from "@/Templates/Contratos/Show/CortoPlazo";
import { Head, usePage } from "@inertiajs/react";

export type Props = {
    query: {
        logo: boolean | undefined;
    } | null;
};

export default function Show({ contrato }: { contrato: Contrato }) {
    const { query } = usePage<Props>().props;

    return (
        <>
            <Head title="Corto Plazo" />
            {/* <CortoPlazo logo={query?.logo} {...contrato} />; */}
        </>
    );
}
