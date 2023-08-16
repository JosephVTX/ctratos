const isImage = (file: File): boolean => {
    const type = file.type.split("/")[0];

    return type === "image";
};

const isPdf = (file: File): boolean => {
    const type = file.type.split("/")[1];

    return type === "pdf";
};

export { isImage, isPdf };
