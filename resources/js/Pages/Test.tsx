import { useEffect, useState } from "react";
import * as pdfjs from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
    const [pages, setPages] = useState<Array<JSX.Element>>([]);
    const [file, setFile] = useState<File | null>(null);

    const loadPDF = async () => {
        const loadingTask = pdfjs.getDocument(URL.createObjectURL(file!));
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
                <div key={i}>
                    <img src={canvas.toDataURL()} alt={`Page ${i}`} />
                </div>
            );
        }

        setPages(newPages);
    };

    useEffect(() => {
        if (file) loadPDF();
    }, [file]);

    return (
        <div>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files![0])}
                accept="application/pdf"
            />
            {pages}
        </div>
    );
};

export default PDFViewer;
