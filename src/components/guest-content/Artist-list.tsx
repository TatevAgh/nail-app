import Artist from "./Artist.tsx";
import { useEffect, useState } from 'react';
import Loading from '../custom-components/Loading.tsx';
import Search from '../custom-components/Search.tsx';

export interface ArtistItem {
    name: string;
    workingHours: string;
    contactInfo: {
        instagram: string;
        whatsapp: string;
        map: string;
    };
}

export default function ArtistList() {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    },[]);

    const artistData: ArtistItem[] = [
        { name: "Nails by Gaya", workingHours: "Mon-Fri, 8:30-11:00 AM", contactInfo: { instagram: "https://www.instagram.com", whatsapp: "https://www.whatsapp.com", map: "https://maps.google.com" } },
        { name: "Nails by Lena", workingHours: "Mon-Fri, 8:30-11:00 AM", contactInfo: { instagram: "https://www.instagram.com", whatsapp: "https://www.whatsapp.com", map: "https://maps.google.com" } },
        { name: "Nails by Toma", workingHours: "Mon-Fri, 8:30-11:00 AM", contactInfo: { instagram: "https://www.instagram.com", whatsapp: "https://www.whatsapp.com", map: "https://maps.google.com" } },
        { name: "Nails by Heghush", workingHours: "Mon-Fri, 8:30-11:00 AM", contactInfo: { instagram: "https://www.instagram.com", whatsapp: "https://www.whatsapp.com", map: "https://maps.google.com" } },
        { name: "Nails by Sona", workingHours: "Mon-Fri, 8:30-11:00 AM", contactInfo: { instagram: "https://www.instagram.com", whatsapp: "https://www.whatsapp.com", map: "https://maps.google.com" } },
        { name: "Nails by Anna", workingHours: "Mon-Fri, 8:30-11:00 AM", contactInfo: { instagram: "https://www.instagram.com", whatsapp: "https://www.whatsapp.com", map: "https://maps.google.com" } },
        { name: "Nails by Arpi", workingHours: "Mon-Fri, 8:30-11:00 AM", contactInfo: { instagram: "https://www.instagram.com", whatsapp: "https://www.whatsapp.com", map: "https://maps.google.com" } }
    ];

    const filteredArtists = artistData.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center justify-center">

            <div className='flex flex-row'>
                <h4 className="font-black text-[#EC759F] text-2xl my-4">Our Artist List</h4>
                <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>

            {loading ? <Loading/> :
                (<>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 w-full max-w-[1200px]">
                        {filteredArtists.length > 0 ? (
                            filteredArtists.map((artist, index) => (
                                <div key={index} className="w-[475px]">
                                    <Artist artist={artist}/>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No artists found...</p>
                        )}
                    </div>
                </>)
            }

        </div>
    );
}
