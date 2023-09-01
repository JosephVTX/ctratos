import { useEffect, FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import { Link, useForm } from "@inertiajs/react";


type InputAuthProps = {
    value: string;
    labelText?: string;
    id?: string;
} & React.ComponentProps<"input">;

export const InputAuth = ({
    value,
    labelText = "",
    id = "",
    ...props
}: InputAuthProps) => {
    return (
        <div className="relative">
            <input
                {...props}
                value={value}
                id={id}
                className="peer block w-full appearance-none rounded-lg border  bg-transparent px-2.5 pb-2.5 pt-4 text-sm border-base-content/50  focus:outline-none focus:ring-0 outline-none focus:border-base-content h-11 "
                placeholder=" "
            />
            <label
                htmlFor={id}
                className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform px-2 text-sm  duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 bg-base-200 peer-focus:px-2 "
            >
                {labelText ?? "Input"}
            </label>
        </div>
    );
};

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "God",
        password: "12345678",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="flex min-h-screen">
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-16 w-1/2">
                <div className="mx-auto w-full xl:w-7/12">
                    <div className="mt-8">
                        <div>
                            <img src="/img/logo-gjg.png" alt="Logo GJG" />
                        </div>

                        <div className="text-4xl text-center my-4">
                            Te da la bienvenida
                        </div>
                        <h4 className="text-center" about="">
                            Inicia Sesión para continuar
                        </h4>
                        <div className="mt-6  bg-base-200 rounded-2xl overflow-hidden shadow">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="p-[1rem_1rem_0_1rem] space-y-8">
                                    <div className="space-y-2">
                                        <InputAuth
                                            labelText="Usuario"
                                            id="username"
                                            name="username"
                                            value={data.username}
                                            onChange={(e) =>
                                                setData(
                                                    "username",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError message={errors.username} />
                                    </div>
                                    <div className="space-y-2">
                                        <InputAuth
                                            labelText="Contraseña"
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError message={errors.password} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 divide-x-[1px]">
                                    <button
                                        type="submit"
                                        className="bg-primary flex justify-center items-center py-4 text-primary-content"
                                    >
                                        Ingresar
                                    </button>
                                    <Link
                                        href={route("password.request")}
                                        className="bg-primary flex justify-center items-center py-4 text-primary-content"
                                    >
                                        Olvidé mi contraseña
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/img/contratos.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}
