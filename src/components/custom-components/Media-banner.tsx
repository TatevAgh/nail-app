import { useState, useEffect } from "react";

export interface MediaItem {
    src: string;
    type: "image" | "video";
}

interface MediaBannerProps {
    items: MediaItem[];
}

export default function MediaBanner({ items }: MediaBannerProps) {
    const [visibleItems, setVisibleItems] = useState<MediaItem[]>([]);

    useEffect(() => {
        const updateItems = () => {
            const screenWidth = window.innerWidth;
            const itemWidth = 100; // Each media block is 400px wide
            const requiredCount = Math.ceil(screenWidth / itemWidth);

            const repeatedItems = Array.from({ length: requiredCount }, (_, i) => items[i % items.length]);

            setVisibleItems(repeatedItems);
        };

        updateItems();
        window.addEventListener("resize", updateItems);

        return () => window.removeEventListener("resize", updateItems);
    }, [items]);

    return (
        <div className="w-full h-[100px] overflow-hidden bg-[#f5f5f5] flex items-center justify-center">
            <div className="flex w-full gap-0">
                {visibleItems.map((item, index) => (
                    <div key={index} className="relative w-[400px] h-[130px] overflow-hidden">
                        {item.type === "video" ? (
                            <video
                                src={item.src}
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover clip-path-[polygon(10% 0, 90% 0, 100% 100%, 0% 100%)]"
                            />
                        ) : (
                            <img
                                src={item.src}
                                alt="Media"
                                className="w-full h-full object-cover clip-path-[polygon(10% 0, 90% 0, 100% 100%, 0% 100%)]"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
