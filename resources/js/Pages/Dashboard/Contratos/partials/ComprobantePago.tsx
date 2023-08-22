import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import ImagePreview from "@/Components/media/ImagePreview";
import { useForm } from "@inertiajs/react";
import { Dialog } from "primereact/dialog";

import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState, useMemo } from "react";

type Files = FileList | null;

export default function ComprobantePago({
    comprobantes_pago_codigo_operacion,
    comprobantes_pago,
    setData,
    errors,
    data,
}) {
    const [visible, setVisible] = useState(false);

    const toast = useRef<Toast>(null);

    const isComplete = useMemo(() => {
        return (
            data.comprobantes_pago?.length ===
                data.comprobantes_pago_codigo_operacion.length &&
            data.comprobantes_pago_codigo_operacion.every(
                (value) => value !== null
            )
        );
    }, [data.comprobantes_pago, data.comprobantes_pago_codigo_operacion]);

    useEffect(() => {
        if (data.comprobantes_pago) {
            setData(
                "comprobantes_pago_codigo_operacion",
                Array.from(data.comprobantes_pago).map(() => null)
            );
        }
    }, [data.comprobantes_pago]);

    const handleSave = () => {
        const isInputEmpty = data.comprobantes_pago_codigo_operacion.some(
            (value) => value === ""
        );

        if (
            data.comprobantes_pago_codigo_operacion.length <
                data.comprobantes_pago!.length ||
            isInputEmpty
        ) {
            return toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "Faltan campos por rellenar",
            });
        } else {
            toast.current?.show({
                severity: "success",
                summary: "Éxito",
                detail: "Se guardó correctamente",
            });
            setVisible(false);
        }
    };

    const footer = (
        <div>
            <button
                className="p-button p-component p-button-text-icon-left"
                onClick={handleSave}
            >
                Guardar
            </button>
        </div>
    );

    return (
        <>
            <button
                className={`${isComplete ? "text-green-600" : "text-red-700"} underline`}
                onClick={() => setVisible(true)}
            >
                {isComplete
                    ? "Códigos Completos"
                    : "Agregar Código Comprobante"}
            </button>
            {
                <InputError message={errors.comprobantes_pago_codigo_operacion} />
            }
            <Dialog
                closable
                header={` Comprobantes de Pago (${
                    data.comprobantes_pago?.length ?? 0
                })`}
                visible={visible}
                onHide={() => setVisible(false)}
                footer={footer}
            >
                <div className="w-[800px] space-y-8">
                    {data.comprobantes_pago?.length &&
                        Array.from(data.comprobantes_pago).map(
                            (file, index) => (
                                <div
                                    key={index}
                                    className="flex  flex-col gap-4 items-center border p-4"
                                >
                                    <div>
                                        <InputLabel
                                            value={`Código de Operación Nº ${
                                                index + 1
                                            }`}
                                            htmlFor={`codigo_operacion_${index}`}
                                        />
                                        <InputText
                                            id={`codigo_operacion_${index}`}
                                            onChange={(e) =>
                                                setData(
                                                    "comprobantes_pago_codigo_operacion",
                                                    [
                                                        ...data.comprobantes_pago_codigo_operacion.slice(
                                                            0,
                                                            index
                                                        ),
                                                        e.target.value,
                                                        ...data.comprobantes_pago_codigo_operacion.slice(
                                                            index + 1
                                                        ),
                                                    ]
                                                )
                                            }
                                            keyfilter={"alphanum"}
                                            className="w-[320px]"
                                            value={
                                                data
                                                    .comprobantes_pago_codigo_operacion[
                                                    index
                                                ] || ""
                                            }
                                        />
                                        <InputError
                                            message={
                                                data
                                                    .comprobantes_pago_codigo_operacion[
                                                    index
                                                ] === ""
                                                    ? "Rellene este campo"
                                                    : ""
                                            }
                                        />
                                    </div>
                                    <div className="w-[420px]">
                                        <ImagePreview file={file as File} />
                                    </div>
                                </div>
                            )
                        )}
                </div>
            </Dialog>

            <Toast ref={toast} />
        </>
    );
}
