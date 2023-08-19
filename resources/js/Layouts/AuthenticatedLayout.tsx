import { ReactNode, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { themeChange } from "theme-change";
import Header from "@/Components/header/Header";

export default function AuthenticatedLayout({
    children,
    headTitle = "Document",
    headerTitle,
}: {
    children: ReactNode;
    headTitle?: string;
    headerTitle?: string;
}) {
    useEffect(() => themeChange(false), []);

    return (
        <>
            <Head title={headTitle} />
            <Header />
            <div className="py-8">
                <div className="px-4">{children}</div>
            </div>
        </>
    );
}
