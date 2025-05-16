export function Header() {
    return (
        <header className="bg-[#fff8e7] shadow-sm px-6 py-4 flex items-center justify-between min-w-[750px] text-[#001f3f]">
            <div className="font-[Limelight] text-4xl font-black">LaZure</div>
            <nav className="flex gap-5 text-[#001f3f]">
                <button
                    className="bg-transparent text-base font-medium px-3 py-2 rounded transition hover:bg-[#edafb8] hover:shadow-md hover:scale-105 hover:opacity-90">
                    Home
                </button>
                <button
                    className="bg-transparent text-base font-medium px-3 py-2 rounded transition hover:bg-[#edafb8] hover:shadow-md hover:scale-105 hover:opacity-90">
                    Find a Nail Artist
                </button>
                <button
                    className="bg-transparent text-base font-medium px-3 py-2 rounded transition hover:bg-[#edafb8] hover:shadow-md hover:scale-105 hover:opacity-90">
                    About Us
                </button>
                <button
                    className="bg-transparent text-base font-medium px-3 py-2 rounded transition hover:bg-[#edafb8] hover:shadow-md hover:scale-105 hover:opacity-90">
                    Sign In as a Nail Artist
                </button>

            </nav>
        </header>
    );
}
