export default function Heart({ size, delay, leftPosition }: { size: number; delay: number; leftPosition: number }) {    return (
        <div
            className="absolute top-0 text-red-500"
            style={{
                left: `${leftPosition}vw`,
                fontSize: `${size}px`,
                animation: `fallAnimation 6s linear infinite`,
                animationDelay: `${delay}s`,
            }}
        >
            ❤️
        </div>
    );
}
