import avatar from '../../../assets/img/logo.jpg';
import phone from '../../../assets/img/phone-call.png';
import message from '../../../assets/img/mail.png';
import location from '../../../assets/img/map.png';

export function ArtistContent() {
    return (
        <div className="flex flex-row items-center">
            <img
                className="align-middle rounded-full mr-4 w-[10rem] h-[10rem]"
                src={avatar}
                alt="Artist avatar"
            />
            <div className="pr-[8rem]">
                <h4 className="my-2">Nail Artistry, Salon</h4>
                <p className="my-2">Manicure & Pedicure Services</p>
                <p className="my-8">Mon-Fri, 8:30-11:00 AM</p>
            </div>
            <div className="flex gap-4 ml-auto">
                <button className="bg-transparent border-none">
                    <img src={phone} alt="Phone" className="w-[2rem] h-[2rem]" />
                </button>
                <button className="bg-transparent border-none">
                    <img src={message} alt="Message" className="w-[2rem] h-[2rem]" />
                </button>
                <button className="bg-transparent border-none">
                    <img src={location} alt="Location" className="w-[2rem] h-[2rem]" />
                </button>
            </div>
        </div>
    );
}

