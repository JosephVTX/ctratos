import { Menu, Transition } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import { Fragment } from "react";
import { Method } from "@inertiajs/core";
import { PageProps } from "@/types";

const userNavigation = [
    { name: "Perfil", href: "#", method: "get" },
    { name: "Ajustes", href: "#", method: "get" },
    { name: "Ayuda", href: "#", method: "get" },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const {
        auth: { user },
        role,
    } = usePage<PageProps>().props;

    console.log(role);

    return (
        <header className="flex flex-1 justify-between p-4 w-full  z-10 bg-gray-600">
            <div className="flex flex-1 items-center">
                <Link href={route("dashboard")}>
                    <img className="h-12" src="/img/logo.png" alt="Logo GJG" />
                </Link>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
                <Menu as="div" className="relative ml-3 z-[100]">
                    <div>
                        <Menu.Button className="flex max-w-xs items-center  text-sm">
                            <div>
                                <p className="font-medium text-base-100">
                                    {user.email}
                                </p>
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
                        <div className="absolute right-0 p-2 bg-base-200 mt-2 w-48 origin-top-right rounded-md shadow-lg">
                            <Menu.Items>
                                {role![0] === "God" && (
                                    <Menu.Item
                                        as="li"
                                        className="hover:bg-surface-hover list-none"
                                    >
                                        <Link
                                            type="button"
                                            method="get"
                                            href={route("dashboard.administracion.index")}
                                            className="block px-4 py-2 text-sm "
                                        >
                                            Administración
                                        </Link>
                                    </Menu.Item>
                                )}
                                {userNavigation.map((item) => (
                                    <Menu.Item
                                        as="li"
                                        className="hover:bg-surface-hover list-none"
                                        key={item.name}
                                    >
                                        {({ active }) => (
                                            <Link
                                                type="button"
                                                method={item.method as Method}
                                                href={item.href}
                                                className={classNames(
                                                    active ? "bg-base-100" : "",
                                                    "block px-4 py-2 text-sm "
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                            <Link
                                as="button"
                                href={route("logout")}
                                method="post"
                                className="w-full  py-2 border-surface-border border-2 rounded-btn mt-2"
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
