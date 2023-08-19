import { Menu, Transition } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import { Fragment } from "react";
import { Method } from "@inertiajs/core";
import { PageProps } from "@/types";
import Roles from "../protect/Roles";

const userNavigation = [
    { name: "Ajustes", href: "#", method: "get" },
    { name: "Ayuda", href: "#", method: "get" },
];

const navigation = [
    {
        name: "Inicio",
        route: "dashboard",
    },
    {
        name: "Areas",
        route: "dashboard.areas.index",
        roles: ["God", "Tecnico", "Supervisor"],
    },
    {
        name: "Contratos",
        route: "dashboard.contratos.index",
    },
];
export default function Header() {
    const {
        auth: { user },
        routeName,
    } = usePage<PageProps>().props;

    return (
        <header className="flex flex-1 justify-between p-4 w-full  z-10 bg-surface-100">
            <div className="flex flex-1 items-center">
                <Link href={route("dashboard")}>
                    <img
                        className="h-10"
                        src="/img/logo-gjg.png"
                        alt="Logo GJG"
                    />
                </Link>

                <ul className="flex text-surface-500 items-center px-4">
                    {navigation.map((item) => (
                        <Roles roles={item?.roles}>
                            <li>
                                <Link
                                    href={route(item.route)}
                                    method="get"
                                    className={`px-4 py-2  font-semibold ${
                                        routeName === item.route
                                            ? "underline"
                                            : ""
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        </Roles>
                    ))}
                </ul>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
                <Menu as="div" className="relative ml-3 z-[100] ">
                    <div>
                        <Menu.Button className="flex max-w-xs items-center  text-sm">
                            <div>
                                <p className="font-medium ">{user.email}</p>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <div className="absolute right-0 p-2 bg-white  border-primary mt-2 w-48 origin-top-right rounded-md shadow-lg">
                            <Menu.Items>
                                <Roles roles={["God"]}>
                                    <Menu.Item
                                        as="li"
                                        className="hover:bg-surface-hover list-none"
                                    >
                                        <Link
                                            type="button"
                                            method="get"
                                            href={route(
                                                "dashboard.administracion.index"
                                            )}
                                            className="hover:underline block px-4 py-2 text-sm"
                                        >
                                            Administración
                                        </Link>
                                    </Menu.Item>
                                </Roles>
                                {userNavigation.map((item) => (
                                    <Menu.Item
                                        as="li"
                                        className="hover:bg-surface-hover list-none"
                                        key={item.name}
                                    >
                                        <Link
                                            type="button"
                                            method={item.method as Method}
                                            href={item.href}
                                            className={
                                                "block px-4 hover:underline py-2 text-sm"
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                            <Link
                                as="button"
                                href={route("logout")}
                                method="post"
                                className="w-full py-2 border rounded-btn mt-2"
                            >
                                Cerrar sesión
                            </Link>
                        </div>
                    </Transition>
                </Menu>
            </div>
        </header>
    );
}
