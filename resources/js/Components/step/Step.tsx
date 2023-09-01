import useStep from "@/Hooks/useStep";
import { Button } from "primereact/button";
import React from "react";
import {
    MdOutlineArrowBackIos,
    MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function Step({ children }: { children: React.ReactNode[] }) {
    const { step, nextStep, prevStep, currentStep } = useStep(children);

    return (
        <div className="w-[460px] space-y-4 shadow-lg p-4 rounded-lg">
            <div className="flex justify-between">
                <button
                    {...prevStep}
                    className="flex items-center gap-2 disabled:opacity-50"
                >
                    <MdOutlineArrowBackIos className="text-3xl" />
                    <span>Atrás</span>
                </button>
                <button
                    {...nextStep}
                    className="flex items-center gap-2 disabled:opacity-50"
                >
                    <span>Siguiente</span>
                    <MdOutlineArrowForwardIos className="text-3xl" />
                </button>
            </div>
            <div className="text-lg text-center">Comprobante {currentStep}</div>
            <div className="flex justify-center gap-8">
                <Button
                    size="small"
                    icon="pi pi-times"
                    rounded
                    severity="danger"
                    aria-label="Cancel"
                />

                <Button
                    size="small"
                    icon="pi pi-check"
                    rounded
                    aria-label="Filter"
                />
            </div>
            <div className="border p-2">{step}</div>
        </div>
    );
}
