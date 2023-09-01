import InputForm from "@/Components/form/InputForm";
import Section from "@/Components/section/Section";
import { Dropdown } from "primereact/dropdown";
import React from "react";
import { bancoClienteOptions } from "../data/form";

export default function DatosCuentaCliente({ data, setData, errors }) {
    return (
        <Section title="Datos Cuenta Cliente">
            <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                <InputForm
                    title="Banco del Cliente"
                    id="banco_cliente"
                    error={errors.banco_cliente}
                >
                    <Dropdown
                        inputId="banco_cliente"
                        className="w-full"
                        value={data.banco_cliente}
                        filter
                        options={bancoClienteOptions}
                        optionValue="label"
                        optionLabel="label"
                        onChange={(e) =>
                            setData("banco_cliente", e.target.value)
                        }
                        placeholder="Seleccione"
                    />
                </InputForm>

                <InputForm
                    title="Tipo de Cuenta"
                    id="tipo_cuenta_cliente"
                    error={errors.tipo_cuenta_cliente}
                >
                    <Dropdown
                        inputId="tipo_cuenta_cliente"
                        disabled={!data.banco_cliente}
                        className="w-full"
                        value={data.tipo_cuenta_cliente}
                        filter
                        options={[
                            {
                                label: "Ahorro",
                                value: "ahorro",
                            },
                            {
                                label: "Corriente",
                                value: "corriente",
                            },
                        ]}
                        onChange={(e) =>
                            setData("tipo_cuenta_cliente", e.target.value)
                        }
                        placeholder="Seleccione"
                    />
                </InputForm>

                <InputForm
                    title="Nº de Cuenta"
                    id="numero_cuenta_cliente"
                    error={errors.numero_cuenta_cliente}
                    value={data.numero_cuenta_cliente}
                    onChange={(e) =>
                        setData("numero_cuenta_cliente", e.target.value)
                    }
                />
                <InputForm
                    title="Nro CCI"
                    id="numero_cci_cliente"
                    value={data.numero_cci_cliente}
                    onChange={(e) =>
                        setData("numero_cci_cliente", e.target.value)
                    }
                    error={errors.numero_cci_cliente}
                />
            </section>
        </Section>
    );
}
