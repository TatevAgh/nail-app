import { useState, useEffect } from "react";

export interface GalleryItem {
    src: string;
    type: "image" | "video";
}

interface GalleryProps {
    title?: string;
    items: GalleryItem[];
    interval?: number;
    clicked?: () => void;
}

export default function Gallery({ title, items, interval = 1000 , clicked}: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, interval);

        return () => clearInterval(id);
    }, [items.length, interval]);

    return (
        <div className="flex flex-col items-center">
            {/*{title && <h2 className="text-white text-2xl font-bold text-center drop-shadow-lg mb-4">{title}</h2>}*/}

            <div
                className="relative w-[350px] h-[500px] rounded-lg shadow-lg overflow-hidden flex items-center justify-center group"
                onClick={clicked}
            >

                {items[currentIndex].type === "video" ? (
                    <video
                        src={items[currentIndex].src}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                    />
                ) : (
                    <img
                        src={items[currentIndex].src}
                        alt="Gallery"
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                    />
                )}

                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="text-white text-2xl font-bold text-center drop-shadow-lg">
                        {title}
                    </h2>
                </div>

                <div
                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>
            </div>

        </div>
    );
}
