import GuestComponent from '../guest-content/Guest-component.tsx';
import { useState } from 'react';
import { galleryItems1, galleryItems2 } from '../../utils/media-data.tsx';
import Gallery from '../custom-components/Gallery.tsx';

export default function LandingContent() {
    const [selectedOption, setSelectedOption] = useState<string>("landing");

    return (
        <div className="flex flex-col justify-center items-center gap-6 p-6">
            {/*<div className="text-lg font-bold my-4">About this page</div>*/}
            <div className="flex flex-row gap-8">
                {selectedOption === "landing" && (
                    <>
                        <Gallery
                            title={'Sign in as a Guest' }
                            items={galleryItems1}
                            interval={1000}
                            clicked={() => setSelectedOption("guest")}
                        />
                        <Gallery
                            title="Sign in as a Specialist"
                            items={galleryItems2}
                            interval={8000}
                            clicked={() => setSelectedOption("specialist")}
                        />
                    </>
                )}

                {selectedOption === "guest" && <GuestComponent />}

            </div>
        </div>
    );
}
