import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { InputAuth } from "./Login";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <div className="flex min-h-screen">
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-16 w-1/2">
                <div className="mx-auto w-full xl:w-7/12">
                    <div className="mt-8 text-center">
                        <div>
                            <img src="/img/logo-gjg.png" alt="Logo GJG" />
                        </div>
                        <h4 className="text-center my-6 font-bold" about="">
                            Restablece tu contraseña
                        </h4>

                        <p className="text-sm">
                            Por favor ingresa tu correo electrónico y te
                            enviaremos un enlace para restablecer tu contraseña.
                        </p>

                        {status && (
                            <div className="text-sm text-green-500 my-4">
                                {status}
                            </div>
                        )}
                        <div className="mt-6  bg-base-200 rounded-2xl overflow-hidden shadow">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="p-[1rem_1rem_0_1rem] space-y-8">
                                    <div className="space-y-2">
                                        <InputAuth
                                            labelText="Correo"
                                            id="username"
                                            name="username"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        <InputError message={errors.email} />
                                    </div>
                                </div>

                                <div className="grid">
                                    <button className="bg-primary flex justify-center link items-center py-4 text-primary-content">
                                        Restablecer Contraseña
                                    </button>
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
