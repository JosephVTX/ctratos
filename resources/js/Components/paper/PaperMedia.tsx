import { useEffect, useState } from "react";
import * as pdfjs from "pdfjs-dist";
import Paper from "./Paper";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
    url?: string;

    file?: File;

    logo?: boolean;

    title?: string;
};

export const Pdf = ({ url, file, logo, title }: Props) => {
    const [pages, setPages] = useState<Array<JSX.Element>>([]);
    const loadPDF = async () => {
        const loadingTask = pdfjs.getDocument(
            url ?? URL.createObjectURL(file!)
        );
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
                <Paper showTitle={false} title={title} logo={logo} key={i}>
                    <img src={canvas.toDataURL()} alt={`Page ${i}`} />
                </Paper>
            );
        }

        setPages(newPages);
    };

    useEffect(() => {
        loadPDF();
    }, [logo, file]);

    return pages;
};



const Image = ({ url, file, logo, title }: Props) => {
    return (
        <Paper showTitle={false} title={title} logo={logo}>
            <img src={url ?? URL.createObjectURL(file!)} alt="" />
        </Paper>
    );
};

export default function PaperMedia({
    url,
    file,
    logo,
    isImage,
    title,
}: Props & { isImage: boolean }) {
    return (
        <>
            {isImage ? (
                <Image url={url} title={title} file={file} logo={logo} />
            ) : (
                <Pdf url={url} title={title} file={file} logo={logo} />
            )}
        </>
    );
}

const PaperMediaUrl = ({ url, title, logo }: Props) => {
    const isPdf = url?.endsWith(".pdf");

    return (
        <>
            {isPdf ? (
                <>
                    <Pdf url={url} title={title} logo={logo} />
                </>
            ) : (
                <Paper showTitle={false} title={title} logo={logo}>
                    <img src={url} alt="Paper Image Url" />
                </Paper>
            )}
        </>
    );
};

export { PaperMediaUrl };
