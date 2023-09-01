import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Section from "@/Components/section/Section";
import { InputText } from "primereact/inputtext";
import ComprobantePago from "./ComprobantePago";

export default function ArchivosAdjuntos({ data, setData, errors }) {
    return (
        <Section title="Archivos Adjuntos">
            <section className="lg:grid grid-cols-2 [&_input]:w-full gap-4">
                <div>
                    <InputLabel value="DNI Anverso" htmlFor="dni_anverso" />
                    <InputText
                        id="dni_anverso"
                        name="dni_anverso"
                        onChange={(e) =>
                            setData("dni_anverso", e.target.files![0])
                        }
                        type="file"
                        accept="image/jpeg,jpg,png,webp"
                    />
                    <InputError message={errors.dni_anverso} />
                </div>

                <div>
                    <InputLabel value="DNI Reverso" htmlFor="dni_reverso" />
                    <InputText
                        id="dni_reverso"
                        name="dni_reverso"
                        onChange={(e) =>
                            setData("dni_reverso", e.target.files![0])
                        }
                        type="file"
                        accept="image/jpeg,jpg,png,webp"
                    />
                    <InputError message={errors.dni_reverso} />
                </div>
                <div>
                    <div className="flex justify-between">
                        <label htmlFor="comprobantes_pago">
                            Comprobantes de Pago
                        </label>
                        <ComprobantePago
                            setData={setData}
                            errors={errors}
                            data={data}
                            comprobantes_pago={data.comprobantes_pago}
                            comprobantes_pago_codigo_operacion={
                                data.comprobantes_pago_codigo_operacion
                            }
                        />
                    </div>
                    <InputText
                        id="comprobantes_pago"
                        name="comprobantes_pago"
                        onChange={(e) =>
                            setData("comprobantes_pago", [...e.target.files!])
                        }
                        type="file"
                        accept=".png,.jpg,.jpeg,.webp, .pdf"
                        multiple
                    />
                    <InputError message={errors.comprobantes_pago} />
                </div>
                <div>
                    <InputLabel
                        value="Declaración Jurada"
                        htmlFor="declaracion_jurada"
                    />
                    <InputText
                        id="declaracion_jurada"
                        name="declaracion_jurada"
                        onChange={(e) =>
                            setData("declaracion_jurada", [...e.target.files!])
                        }
                        type="file"
                        accept=".png,.jpg,.jpeg,.webp, .pdf"
                        multiple
                    />
                    <InputError message={errors.declaracion_jurada} />
                </div>
                <div>
                    <InputLabel
                        value="Sustento Decl. Jurada"
                        htmlFor="sustento_declaracion_jurada"
                    />
                    <InputText
                        id="sustento_declaracion_jurada"
                        name="sustento_declaracion_jurada"
                        onChange={(e) =>
                            setData("sustento_declaracion_jurada", [
                                ...e.target.files!,
                            ])
                        }
                        type="file"
                        accept=".png,.jpg,.jpeg,.webp, .pdf"
                        multiple
                    />
                    <InputError message={errors.sustento_declaracion_jurada} />
                </div>
            </section>
        </Section>
    );
}
