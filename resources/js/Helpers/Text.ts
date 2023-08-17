import writtenNumber from "written-number";

const numberToText = (number) => {
    const parsedValue = parseInt(number.toString());

    const formatted = writtenNumber(parsedValue, {
        lang: "es",
    });

    const capitalized = formatted.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");

    
    return capitalized;
};

export { numberToText };
