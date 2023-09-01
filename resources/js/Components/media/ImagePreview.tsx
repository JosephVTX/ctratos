import ImageRotator from "../imageRotator/ImageRotator";

type Props = {
    file?: File;
    onImageRotated?: (image: Blob | null) => void;
};

export default function ImagePreview({
    file,
}: Props & React.ImgHTMLAttributes<HTMLImageElement>) {
    return <ImageRotator image={file!} />;
}
