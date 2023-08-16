import React from "react";

type Props = {
    sectionNumber: string;
    title?: string;
    children: React.ReactNode;
};

export default function SubClausula({ sectionNumber, title, children }: Props) {
    return (
        <section className="flex">
            <p className="mr-4 h-full">{sectionNumber}.</p>

            <p>
                <b>{title}</b> {children}
            </p>
        </section>
    );
}
