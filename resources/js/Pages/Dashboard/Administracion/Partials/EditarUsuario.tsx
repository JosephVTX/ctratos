import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { router, useForm, usePage } from "@inertiajs/react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Password } from "primereact/password";

const rolOpciones = [
    {
        label: "God",
    },
    {
        label: "Tecnico",
    },
    {
        label: "Supervisor",
    },
    {
        label: "Usuario",
    },
];

export default function EditarUsuario({ areas, setClose, currentUser }) {
    const { errors } = usePage().props;
    const { data, setData } = useForm({
        name: currentUser.name,
        username: currentUser.username,
        email: currentUser.email,
        codigo: currentUser.codigo,
        area_id: currentUser.areas.map((area) => area.id),
        rol: currentUser.roles[0].name,
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        router.patch(
            route("user.update", currentUser.id),
            {
                ...data,
                password_confirmation: data.password,
            },
            {
                onSuccess: () => {
                    setClose(false);
                },
            }
        );
    };

    console.log(currentUser);

    return (
        <form
            onSubmit={submit}
            className="lg:grid lg:grid-cols-2 gap-4 [&_input]:w-full"
        >
            <div>
                <InputLabel isRequired value="Nombre" htmlFor="name" />

                <InputText
                    id="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} />
            </div>
            <div>
                <InputLabel isRequired value="Usuario" htmlFor="username" />

                <InputText
                    id="username"
                    maxLength={16}
                    value={data.username}
                    onChange={(e) => setData("username", e.target.value)}
                />
                <InputError message={errors.username} />
            </div>
            <div>
                <InputLabel isRequired value="Correo" htmlFor="email" />

                <InputText
                    id="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                <InputError message={errors.email} />
            </div>
            <div>
                <InputLabel
                    isRequired
                    value="Código de Asesor"
                    htmlFor="codigo"
                />

                <InputText
                    id="codigo"
                    value={data.codigo}
                    onChange={(e) => setData("codigo", e.target.value)}
                    maxLength={8}
                />
                <InputError message={errors.codigo} />
            </div>
            <div>
                <InputLabel isRequired value="Area" htmlFor="area" />

                <MultiSelect
                    inputId="area"
                    value={data.area_id}
                    onChange={(e) => setData("area_id", e.target.value)}
                    options={areas}
                    optionLabel="departamento"
                    optionValue="id"
                    filter
                    placeholder="Areas"
                    className="w-full md:w-20rem"
                />
                <InputError message={errors.area_id} />
            </div>
            <div>
                <InputLabel isRequired value="Rol" htmlFor="rol" />

                <Dropdown
                    inputId="rol"
                    className="w-full"
                    value={data.rol}
                    onChange={(e) => setData("rol", e.target.value)}
                    options={rolOpciones}
                    optionLabel="label"
                    optionValue="label"
                />
                <InputError message={errors.rol} />
            </div>

            <div>
                <InputLabel value="Contraseña" htmlFor="password" />
                <Password
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    toggleMask
                    className="w-full"
                />

                <InputError message={errors.password} />
            </div>

            <div className="col-span-2 flex justify-end">
                <Button label="Editar Usuario" />
            </div>
        </form>
    );
}
