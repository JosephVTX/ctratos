import { LabelHTMLAttributes } from "react";

export default function InputLabel({
    isRequired,
    value,
    className = "",
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & {
    value?: string;
    isRequired?: boolean;
}) {
    return (
        <label
            {...props}
            className={`block font-medium text-sm mb-1 ` + className}
        >
            {value ? value : children}{" "}
            <span className="text-red-500">{isRequired ? "(*)" : ""}</span>
        </label>
    );
}
