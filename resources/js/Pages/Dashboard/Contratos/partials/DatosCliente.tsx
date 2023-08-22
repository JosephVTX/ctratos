import InputForm from "@/Components/form/InputForm";
import Section from "@/Components/section/Section";
import { Dropdown } from "primereact/dropdown";
import { generoOptions, typeDocumentOptions } from "../data/form";

export default function DatosCliente({
    data,
    setData,
    errors,
    departamentos,
    provincias,
    distritos,
}) {
    return (
        <Section title="Datos del Cliente">
            <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                <InputForm
                    id="nombres"
                    title="Nombres"
                    value={data.nombres}
                    onChange={(e) => setData("nombres", e.target.value)}
                    error={errors.nombres}
                />

                <InputForm
                    title="Apellidos"
                    id="apellidos"
                    value={data.apellidos}
                    onChange={(e) => setData("apellidos", e.target.value)}
                    error={errors.apellidos}
                />
                <InputForm
                    title="Tipo de Documento"
                    id="tipo_doc"
                    error={errors.tipo_doc}
                >
                    <Dropdown
                        inputId="tipo_doc"
                        className="w-full"
                        value={data.tipo_doc}
                        options={typeDocumentOptions}
                        optionValue="value"
                        optionLabel="label"
                        onChange={(e) => setData("tipo_doc", e.target.value)}
                        placeholder="Seleccione"
                    />
                </InputForm>
                <InputForm
                    title="Nº de Doc"
                    id="numero_doc"
                    value={data.numero_doc}
                    onChange={(e) => setData("numero_doc", e.target.value)}
                    error={errors.numero_doc}
                    keyfilter={"int"}
                    maxLength={
                        data.tipo_doc === "dni"
                            ? 8
                            : data.tipo_doc === "ce"
                            ? 15
                            : 12
                    }
                />
            </section>
            <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                <InputForm
                    title="Departamento"
                    id="departamento"
                    error={errors.departamento}
                >
                    <Dropdown
                        inputId="departamento"
                        filter
                        className="w-full"
                        value={data.departamento}
                        options={departamentos}
                        optionLabel="nombre"
                        onChange={(e) =>
                            setData("departamento", e.target.value)
                        }
                        placeholder="Seleccione"
                    />
                </InputForm>

                <InputForm
                    title="Provincia"
                    id="provincia"
                    error={errors.provincia}
                >
                    <Dropdown
                        filter
                        inputId="provincia"
                        className="w-full"
                        value={data.provincia}
                        disabled={!data.departamento.id}
                        options={provincias.filter(
                            (p) => p.departamento_id === data.departamento.id
                        )}
                        optionLabel="nombre"
                        onChange={(e) => setData("provincia", e.target.value)}
                        placeholder="Seleccione"
                    />
                </InputForm>

                <InputForm
                    title="Distrito"
                    id="distrito"
                    error={errors.distrito}
                >
                    <Dropdown
                        inputId="distrito"
                        filter
                        className="w-full"
                        disabled={!data.provincia.id}
                        value={data.distrito}
                        options={distritos.filter(
                            (d) => d.provincia_id === data.provincia.id
                        )}
                        optionLabel="nombre"
                        optionValue="nombre"
                        onChange={(e) => setData("distrito", e.target.value)}
                        placeholder="Seleccione"
                    />
                </InputForm>
                <InputForm
                    title="Dirección"
                    id="direccion"
                    value={data.direccion}
                    onChange={(e) => setData("direccion", e.target.value)}
                    error={errors.direccion}
                />
            </section>

            <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                <InputForm
                    id="correo"
                    title="Correo"
                    value={data.correo}
                    onChange={(e) => setData("correo", e.target.value)}
                    error={errors.correo}
                />

                <InputForm
                    id="celular"
                    title="Celular"
                    value={data.celular}
                    onChange={(e) => setData("celular", e.target.value)}
                    error={errors.celular}
                />

                <InputForm
                    id="genero"
                    title="Genero del Cliente"
                    error={errors.genero}
                >
                    <Dropdown
                        inputId="genero"
                        className="w-full"
                        value={data.genero}
                        options={generoOptions}
                        optionValue="value"
                        optionLabel="label"
                        onChange={(e) => setData("genero", e.target.value)}
                        placeholder="Seleccione"
                    />
                </InputForm>

                <InputForm
                    title="Ocupación"
                    id="ocupacion"
                    error={errors.ocupacion}
                    value={data.ocupacion}
                    onChange={(e) => setData("ocupacion", e.target.value)}
                />
            </section>
        </Section>
    );
}
