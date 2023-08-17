import { InputText } from "primereact/inputtext";
import InputError from "@/Components/InputError";
import { useForm } from "laravel-precognition-react-inertia";

export default function Test() {
    const form = useForm("post", route("contratos.preview"), {
        nombres: "",
    });

    console.log(form.errors);

    const submit = (e: any) => {
        e.preventDefault();
        form.submit();
    };
    return (
        <form onSubmit={submit}>
            <div>
                <InputText
                    onChange={(e) => form.setData("nombres", e.target.value)}
                    placeholder="Nombre"
                    onBlur={() => form.validate('nombres')}
                />

                {form.invalid("nombres") && <div>{form.errors.nombres}</div>}

                <button>fadas</button>
            </div>
        </form>
    );
}
