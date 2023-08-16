import { useEffect, useState } from "react";
import * as pdfjs from "pdfjs-dist";
import Paper from "./Paper";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
    url?: string;

    file?: File;
};
export default function PaperPdf({ url, file }: Props) {
    const [pages, setPages] = useState<Array<JSX.Element>>([]);
    const loadPDF = async () => {
        const loadingTask = pdfjs.getDocument(
            url ?? URL.createObjectURL(file!)
        );
        const pdf = await loadingTask.promise;
        const newPages = [];

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
                <Paper key={i}>
                    <img src={canvas.toDataURL()} alt={`Page ${i}`} />
                </Paper>
            );
        }

        setPages(newPages);
    };

    useEffect(() => {
        loadPDF();
    }, []);

    return <>{pages}</>;
}
