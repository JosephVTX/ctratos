import React from "react";

type Props = {
    children: React.ReactNode;
    logo?: boolean;
    title?: string;
};
export default function Paper({ children, logo = false, title }: Props) {
    return (
        <div className="w-[900px] mx-auto px-20 pt-10 py-16 text-[13px] h-[1300px] text-justify space-y-6 relative overflow-hidden border bg-white">
            <div
                className={`w-[738px] -translate-x-1/2 left-1/2 absolute bottom-10 ${
                    logo ? "visible" : "invisible"
                }`}
            >
                <hr className="border-red-600 border-[1px] mb-2" />
                <div className="flex justify-between">
                    <p>Av. José Larco 101 piso 13 - Miraflores</p>

                    <p>atc@gjgsoluciones.com.pe</p>
                </div>
            </div>
            <img
                src="/img/image4.png"
                className={`absolute -bottom-48 -left-48 z-[5] opacity-25 ${
                    logo ? "visible" : "invisible"
                }`}
                alt=""
            />
            <div className="flex justify-between mb-[20px] items-center">
                <img
                    src="/img/image5.png"
                    className={`h-[70px] ${logo ? "visible" : "invisible"}`}
                    alt="GJG LOGO"
                />
                <p className="font-bold">
                    CONTRATO N° D09-06-003-MP / 2023- GJG
                </p>
            </div>

            <h4 className="text-center font-bold">{title}</h4>
            {children}
        </div>
    );
}
