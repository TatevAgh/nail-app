export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center text-xl font-bold text-[#EC759F]">
            <span
                className="animate-spin w-10 h-10 border-4 border-[#EC759F] border-t-transparent rounded-full mb-4"></span>
            <p>Loading Artists...</p>
        </div>
    );
}
