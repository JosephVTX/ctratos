type Props = {
    file?: File;
};

export default function ImagePreview({ file }: Props) {
    return <img src={URL.createObjectURL(file!)} alt={file!.name} />;
}
