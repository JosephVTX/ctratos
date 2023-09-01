import writtenNumber from "written-number";

//type writtenNumber = any;



const numberToText = (number:number) => {
    const parsedValue = parseInt(number.toString());

    const formatted = writtenNumber(parsedValue, {
        lang: "es",
    });

    const capitalized = formatted.split(" ").map((word:string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");

    
    return capitalized;
};

export { numberToText };
