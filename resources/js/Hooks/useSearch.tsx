import { router, usePage } from "@inertiajs/react";
import { useDebounce } from "primereact/hooks";
import { useEffect } from "react";

export type Props = {
    query: object | null;
    routeName: string;
};
export default function useSearch(queryKey: string, debounce: number = 1000) {
    const { query, routeName } = usePage<Props>().props;
    const [inputValue, debouncedValue, setInputValue] = useDebounce(
        null,
        debounce
    );

    useEffect(() => {
        if (debouncedValue) {
            router.get(
                route(routeName),
                {
                    ...query,
                    [queryKey]: debouncedValue,
                },
                {
                    preserveState: true,
                }
            );
        }

        if (debouncedValue == "") router.get(route(routeName));
    }, [debouncedValue]);

    return [inputValue, setInputValue];
}
