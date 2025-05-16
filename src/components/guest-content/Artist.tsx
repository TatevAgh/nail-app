import avatar from '../../assets/img/logo.jpg';
import phone from '../../assets/img/phone-call.png';
import message from '../../assets/img/mail.png';
import location from '../../assets/img/map.png';
import { ArtistItem } from './Artist-list.tsx';

export default function Artist({artist}: { artist: ArtistItem }) {

    return (
        <div className="flex flex-row items-center font-semibold my-4 p-4 box-border text-[#003467] border-black rounded-full shadow-[-1px_-1px_6px_0px_rgba(244,_194,_194,_1)]
            transition-transform duration-300 hover:bg-[#FFEAE8] active:bg-[#FFEAE8] hover:border-[#c3b8a4] active:border-[#edafb8]
            hover:shadow-md active:shadow-lg hover:scale-105 active:scale-105">

            <img
                className="align-middle rounded-full mr-4 w-[4rem] h-[4rem]"
                src={avatar}
                alt="Artist avatar"
            />
            <div className="pr-[3rem]">
                <h4 className="my-2">{artist.name}</h4>
                <p className="my-2">{artist.workingHours}</p>
            </div>
            <div className="flex gap-4 ml-auto">
                <button className="bg-transparent border-none">
                    <img src={phone} alt="Phone" className="w-[2rem] h-[2rem]"/>
                </button>
                <button className="bg-transparent border-none">
                    <img src={message} alt="Message" className="w-[2rem] h-[2rem]"/>
                </button>
                <button className="bg-transparent border-none">
                    <img src={location} alt="Location" className="w-[2rem] h-[2rem]"/>
                </button>
            </div>
        </div>
    );
}
