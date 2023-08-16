import React from "react";

interface Props {
    clausula: string;
    subtitle: string;
    children?: React.ReactNode;
}

export default function Clausula({ clausula, subtitle, children }: Props) {
    return (
        <>
            <div className="flex font-bold">
                <h6 className="basis-[30%]">
                    CLÁUSULA <span className="uppercase">{clausula}</span>:
                </h6>

                <h6 className="uppercase">{subtitle}</h6>
            </div>

            {children}
        </>
    );
}
