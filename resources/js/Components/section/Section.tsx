import React from "react";

export default function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
            id="client_data"
        >
            <h4 className="font-semibold">{title}</h4>

            {children}
        </div>
    );
}
