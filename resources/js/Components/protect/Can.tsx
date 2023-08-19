import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import React from "react";

type Props = {
    value: string;
    children: React.ReactNode;
};

export default function Can({ value, children }: Props) {
    const { permissions } = usePage<PageProps>().props;

    return <>{permissions.includes(value) ? children : null}</>;
}
