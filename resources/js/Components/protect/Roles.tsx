import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";

type Props = {
    roles: ("God" | "Tecnico" | "Supervisor" | "Usuario")[];
    children: React.ReactNode;
    exclude?: boolean;
};

export default function Roles({ roles, children, exclude }: Props) {
    const { role } = usePage<PageProps>().props;

    return (
        <>
            {exclude
                ? !roles.some((r) => role.includes(r)) && children
                : roles.some((r) => role.includes(r)) && children}
        </>
    );
}
