import React, { useState, useEffect, useRef } from "react";

interface ImageRotatorProps {
    image: File | null;
    onImageRotated?: (image: Blob | null) => void;
}

const ImageRotator: React.FunctionComponent<ImageRotatorProps> = ({
    image,
    onImageRotated,
}) => {
    const [rotation, setRotation] = useState(0);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const reader = new FileReader();

        if (image) {
            reader.readAsDataURL(image);

            reader.onload = () => {
                const img = new Image();
                img.src = reader.result as string;
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext(
                        "2d"
                    ) as CanvasRenderingContext2D;
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    setCroppedImage(canvas.toDataURL());
                };
            };
        }
    }, [image]);

    useEffect(() => {
        if (canvasRef.current && croppedImage) {
            const canvas = canvasRef.current;

            const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
            const img = new Image();
            img.src = croppedImage;
            img.onload = () => {
                const radians = (rotation * Math.PI) / 180;
                const sin = Math.sin(radians);
                const cos = Math.cos(radians);

                // width calc 320px
                const width =
                    img.width > img.height
                        ? 640
                        : (640 * img.width) / img.height;
                const height =
                    img.height > img.width
                        ? 640
                        : (640 * img.height) / img.width;

                const canvasWidth =
                    Math.abs(width * cos) + Math.abs(height * sin);
                const canvasHeight =
                    Math.abs(height * cos) + Math.abs(width * sin);
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx.rotate(radians);
                ctx.drawImage(img, -width / 2, -height / 2, width, height);
                if (rotation) {
                    const canvas = canvasRef.current;
                    canvas!.toBlob(onImageRotated!);
                }
            };
        }
    }, [rotation, croppedImage]);

    const onRotate = () => {
        if (rotation === 270) {
            setRotation(0);
        } else {
            setRotation(rotation + 90);
        }
    };

    return (
        <div className="space-y-4">
            <button
                className="bg-blue-800 py-2 px-6 rounded-lg text-white"
                onClick={onRotate}
            >
                Rotar
            </button>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default ImageRotator;
