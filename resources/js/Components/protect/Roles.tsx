import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";

type Props = {
    roles: string[] | undefined;
    children: React.ReactNode;
    exclude?: boolean;
};

export default function Roles({ roles, children, exclude }: Props) {
    const { role } = usePage<PageProps>().props;

    return (
        <>
            {!roles
                ? children
                : exclude
                ? !roles?.some((r) => role.includes(r)) && children
                : roles?.some((r) => role.includes(r)) && children}
        </>
    );
}
