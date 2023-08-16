import React from "react";

type Props = {
    sectionNumber: string;
    title?: string;
    children: React.ReactNode;
    showSectionNumber?: boolean;
};

export default function SubClausula({ sectionNumber, title, children, showSectionNumber = true }: Props) {
    return (
        <section className="flex">
            <div className={`mr-4 h-full ${showSectionNumber ? "visible": "invisible"}`}>{sectionNumber}.</div>

            <div>
                <b>{title}</b> {children}
            </div>
        </section>
    );
}
