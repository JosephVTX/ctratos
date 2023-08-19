import { InputText, InputTextProps } from "primereact/inputtext";
import React from "react";
import InputLabel from "../InputLabel";
import InputError from "../InputError";

type Props = {
    children?: React.ReactNode;
    title: string;
    error?: string;
    id: string;
};
export default function InputForm({
    id,
    title,
    error,
    children,
    ...props
}: Props & InputTextProps) {
    return (
        <div>
            <InputLabel htmlFor={id} value={title} />
            {children ? children : <InputText id={id} {...props} />}
            <InputError message={error} />
        </div>
    );
}
