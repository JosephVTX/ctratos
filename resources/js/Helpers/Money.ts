import writtenNumber from "written-number";

const formatCurrency = (value: string, isUSD = false) => {


    const parsedValue = parseInt(value.toString());
    
    const formatter = new Intl.NumberFormat(isUSD ? "en-US" : "es-PE", {
        style: "currency",
        currency: isUSD ? "USD" : "PEN",
        minimumFractionDigits: 2,
        notation: "standard",
    });

    const formatted = `${formatter.format(parsedValue)} ( ${writtenNumber(parsedValue, {
        lang: "es",
    })} Con ${parsedValue % 1}0/100 ${isUSD ? "Dolares" : "Soles"})`;

    const capitalized = formatted
        .split(" ")
        .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");

    return capitalized;
};

export { formatCurrency };
