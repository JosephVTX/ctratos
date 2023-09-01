import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import InputForm from "@/Components/form/InputForm";
import Section from "@/Components/section/Section";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { bancoGJGDolaresOptions, bancoGJGSolesOptions } from "../data/form";

export default function DatosCuentaGJG({ data, setData, errors }) {
    return (
        <Section title="Datos cuenta - GJG">
            <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                <InputForm
                    id="banco_gjg"
                    title={`Banco GJG ${
                        data.moneda === "S/" ? "Soles" : "Dólares"
                    }`}
                    error={errors.banco_gjg}
                >
                    <Dropdown
                        inputId="banco_gjg"
                        className="w-full"
                        value={data.banco_gjg}
                        options={
                            data.moneda === "S/"
                                ? bancoGJGSolesOptions
                                : bancoGJGDolaresOptions
                        }
                        optionLabel="nombre"
                        onChange={(e) => setData("banco_gjg", e.value)}
                        placeholder="Seleccione"
                    />
                </InputForm>
                <div>
                    <InputLabel
                        value={`Cuenta en ${
                            data.moneda === "S/" ? "Soles" : "Dólares"
                        }`}
                        id="apellidos"
                    />
                    <InputText
                        disabled
                        value={data.banco_gjg?.cuenta || ""}
                        name="apellidos"
                    />
                    <InputError message={errors.banco_gjg} />
                </div>
            </section>
        </Section>
    );
}
