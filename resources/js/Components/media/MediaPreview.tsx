import { useEffect, useState } from "react";

import * as pdfjs from "pdfjs-dist";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
type Props = {
    file?: File;
};
const PDF = ({ file }: Props) => {
    const [pages, setPages] = useState<Array<JSX.Element>>([]);
    const loadPDF = async () => {
        const loadingTask = pdfjs.getDocument(URL.createObjectURL(file!));
        const pdf = await loadingTask.promise;
        let newPages: JSX.Element[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            await page.render({
                canvasContext: context!,
                viewport,
            }).promise;
            newPages.push(
                <img key={i} src={canvas.toDataURL()} alt={`Page ${i}`} />
            );
        }

        setPages(newPages);
    };

    useEffect(() => {
        loadPDF();
    }, [file]);

    return pages;
};

export default function MediaPreview({ file }: Props) {
    return (
        <>
            {file!.type === "application/pdf" ? (
                <PDF file={file} />
            ) : (
                <img src={URL.createObjectURL(file!)} alt="" />
            )}
        </>
    );
}
