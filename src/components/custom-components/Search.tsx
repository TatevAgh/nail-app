import { FiSearch } from "react-icons/fi";
import { useState } from 'react';

interface SearchProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export default function Search({ searchTerm, onSearchChange }: SearchProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-12 h-12 bg-transparent rounded-full transition-all duration-300 hover:scale-110"
            >
                <FiSearch className="text-[#EC759F] text-2xl" />
            </button>

            <input
                type="text"
                className={`absolute left-14 w-0 opacity-0 transition-all duration-300 bg-[#fff8e7] text-[#EC759F] 
                           p-2 rounded-full border-2 border-[#EC759F] focus:outline-none 
                           ${isOpen ? "w-[250px] opacity-100 px-4" : ""}`}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}
