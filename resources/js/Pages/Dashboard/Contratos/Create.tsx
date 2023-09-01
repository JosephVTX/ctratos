import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { contratoFormData } from "./data/form";
import DatosCliente from "./partials/DatosCliente";
import OpcionesContrato from "./partials/OpcionesContrato";
import DatosCuentaCliente from "./partials/DatosCuentaCliente";
import DatosCuentaGJG from "./partials/DatosCuentaGJG";
import FooterOptions from "./partials/FooterOptions";
import Cronograma from "./partials/Cronograma";
import ArchivosAdjuntos from "./partials/ArchivosAdjuntos";
import CortoPlazo from "@/Templates/Contratos/Preview/CortoPlazo";

export default function Create({
    departamentos,
    provincias,
    distritos,
    tipo_contratos,
    rentabilidades,
    vigencia_contratos,
}: Props) {
    const [openModalPreview, setOpenModalPreview] = useState(false);
    const [withLogo, setWithLogo] = useState(false);

    const { errors } = usePage().props;

    const { data, setData } = useForm({
        ...contratoFormData,
        tipo_contrato: tipo_contratos[0],
        comprobantes_pago_codigo_operacion: [] as string[],
    });

    const [cronograma, setCronograma] = useState<Cronograma | any>({});
    const [cronogramas, setCronogramas] = useState<any[]>([]);

    useEffect(() => {
        if (openModalPreview) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [openModalPreview]);

    const handlePreview = () => {
        router.post(
            route("contratos.preview"),
            {
                ...data,
                departamento: data.departamento.nombre,
                provincia: data.provincia.nombre,
                tipo_contrato: data.tipo_contrato.nombre,

                rentabilidad: data.rentabilidad,
                vigencia_contrato: data.vigencia_contrato,
                banco_gjg: data.banco_gjg,
            },
            {
                preserveScroll: true,
                forceFormData: true,

                onSuccess: () => {
                    setOpenModalPreview(true);
                },
            }
        );
    };

    const handleSubmmit = () => {
        const newData = {
            ...data,
            departamento: data.departamento.nombre,
            provincia: data.provincia.nombre,
            tipo_contrato: data.tipo_contrato.nombre,
            tiene_factura: data.tiene_factura,
            comprobantes_pago: data.comprobantes_pago,
            comprobantes_pago_codigo_operacion:
                data.comprobantes_pago_codigo_operacion,
            rentabilidad: data.rentabilidad,
            numero_cuenta_gjg: data.banco_gjg.cuenta,
            nombre_cuenta_gjg: data.banco_gjg.nombre,
            vigencia_contrato: data.vigencia_contrato,
            banco_gjg: {
                cuenta: data.banco_gjg.cuenta,
                nombre: data.banco_gjg.nombre,
            },
        };

        router.post(route("dashboard.contratos.store"), newData, {
            preserveScroll: true,
            forceFormData: true,
        });
    };

    return (
        <>
            <AuthenticatedLayout headTitle="Crear Contrato">
                <div className="space-y-8 pb-12">
                    <DatosCliente
                        data={data}
                        setData={setData}
                        errors={errors}
                        departamentos={departamentos}
                        distritos={distritos}
                        provincias={provincias}
                    />
                    <OpcionesContrato
                        data={data}
                        setData={setData}
                        errors={errors}
                        tipo_contratos={tipo_contratos}
                        rentabilidades={rentabilidades}
                        vigencia_contratos={vigencia_contratos}
                    />

                    {data.tipo_contrato.id !== 1 && (
                        <Cronograma
                            {...{
                                data,
                                errors,
                                cronogramas,
                                setCronogramas,
                                cronograma,
                                setCronograma,
                            }}
                        />
                    )}
                    <DatosCuentaCliente
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <DatosCuentaGJG
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <ArchivosAdjuntos
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                </div>
            </AuthenticatedLayout>

            {openModalPreview && (
                <div className="bg-black fixed h-screen overflow-scroll w-screen top-0 left-0 z-[100] pb-16">
                    <CortoPlazo logo={withLogo} {...(data as any)} />
                </div>
            )}
            <FooterOptions
                openModalPreview={openModalPreview}
                setWithLogo={setWithLogo}
                setOpenModalPreview={setOpenModalPreview}
                handlePreview={handlePreview}
                handleSubmmit={handleSubmmit}
                withLogo={withLogo}
            />
        </>
    );
}
