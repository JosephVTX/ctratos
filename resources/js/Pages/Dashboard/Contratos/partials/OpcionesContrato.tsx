import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import InputForm from "@/Components/form/InputForm";
import Section from "@/Components/section/Section";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import React from "react";

export default function OpcionesContrato({ data, setData, errors, tipo_contratos, rentabilidades, vigencia_contratos }) {
    return (
        <Section title="Opciones de Contrato">
            <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                <InputForm
                    id="tipo_contrato"
                    title="Tipo de Contrato"
                    error={errors.tipo_contrato}
                >
                    <Dropdown
                        inputId="tipo_contrato"
                        className="w-full"
                        value={data.tipo_contrato}
                        options={tipo_contratos}
                        optionLabel="nombre"
                        onChange={(e) =>
                            setData("tipo_contrato", e.target.value)
                        }
                        placeholder="Seleccione"
                    />
                </InputForm>
                <div>
                    <InputLabel value="% de Renta" id="profit" />
                    <Dropdown
                        className="w-full"
                        disabled={!data.tipo_contrato.id}
                        value={data.rentabilidad}
                        options={rentabilidades.filter(
                            (item) =>
                                item.tipo_contrato_id === data.tipo_contrato.id
                        )}
                        optionLabel="percent"
                        filter
                        valueTemplate={(o, props) => {
                            if (o) {
                                return (
                                    <span className="text-sm">
                                        {o?.porcentaje} %
                                    </span>
                                );
                            }

                            return props?.placeholder;
                        }}
                        itemTemplate={(o) => (
                            <span className="text-sm">{o?.porcentaje} %</span>
                        )}
                        onChange={(e) =>
                            setData("rentabilidad", e.target.value)
                        }
                        placeholder="Seleccione"
                    />
                    <InputError message={errors.rentabilidad} />
                </div>
                <div>
                    <InputLabel
                        value="Vigencia de Contrato"
                        htmlFor="vigencia_contratos"
                    />
                    <Dropdown
                        inputId="vigencia_contratos"
                        className="w-full"
                        disabled={!data.rentabilidad?.id}
                        value={data.vigencia_contrato}
                        options={vigencia_contratos.filter(
                            (v) => v.rentabilidad_id === data.rentabilidad?.id
                        )}
                        optionLabel="cantidad"
                        itemTemplate={(option) => (
                            <span className="text-sm">
                                {option?.cantidad} {option?.unidad}
                            </span>
                        )}
                        valueTemplate={(o, props) => {
                            if (o) {
                                return (
                                    <span className="text-sm">
                                        {o?.cantidad} {o?.unidad}
                                    </span>
                                );
                            }

                            return props?.placeholder;
                        }}
                        onChange={(e) => setData("vigencia_contrato", e.value)}
                        placeholder="Seleccione"
                    />
                    <InputError message={errors.vigencia_contrato} />
                </div>
                <div>
                    <InputLabel value="Capital" id="capital" />

                    <div className="p-inputgroup">
                        <Dropdown
                            className="!w-5"
                            panelClassName="!w-5"
                            value={data.moneda}
                            options={[
                                {
                                    label: "PEN",
                                    value: "S/",
                                },
                                {
                                    label: "USD",
                                    value: "$",
                                },
                            ]}
                            onChange={(e) => setData("moneda", e.target.value)}
                            placeholder="Moneda"
                        />
                        <InputNumber
                            placeholder="Capital"
                            onChange={(e) => setData("capital", `${e.value}`)}
                            mode="currency"
                            maxFractionDigits={0.0}
                            locale={data.moneda === "S/" ? "es-PE" : "en-US"}
                            currency={data.moneda === "S/" ? "PEN" : "USD"}
                        />
                    </div>
                    <InputError message={errors.capital} />
                </div>
                
            </section>

            <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                <InputForm
                    id="fecha_inicio"
                    title="Fecha Inicio"
                    type="date"
                    error={errors.fecha_inicio}
                    value={data.fecha_inicio}
                    onChange={(e) => setData("fecha_inicio", e.target.value)}
                />

                <InputForm
                    id="fecha_fin"
                    title="Fecha Fin"
                    type="date"
                    error={errors.fecha_fin}
                    value={data.fecha_fin}
                    onChange={(e) => setData("fecha_fin", e.target.value)}
                />
                <InputForm
                    id="fecha_venta"
                    title="Fecha Venta del Contrato"
                    type="date"
                    error={errors.fecha_venta}
                    value={data.fecha_venta}
                    onChange={(e) => setData("fecha_venta", e.target.value)}
                />
                <InputForm id="tiene_venta" title="Tiene Factura">
                    <div className="pt-3">
                        <InputSwitch
                            checked={data.tiene_factura}
                            onChange={(e) =>
                                setData("tiene_factura", e.value as boolean)
                            }
                        />
                    </div>
                </InputForm>
            </section>
        </Section>
    );
}
