import Heart from "./Heart";

export default function FallingHearts() {
    return (
        <div className="absolute inset-0 -z-50 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <Heart
                    key={i}
                    size={Math.random() * 20 + 10}
                    delay={Math.random() * 5}
                    leftPosition={Math.random() * 100}
                />
            ))}
        </div>
    );
}
