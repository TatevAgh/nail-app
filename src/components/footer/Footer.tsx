import instagramIcon from './../../assets/img/instagram.png';
import tikTokImg from './../../assets/img/tik-tok.png';

export function Footer() {
    return (
        <footer className="px-8 w-full min-w-[750px] bottom-0 text-[#726960] flex justify-between shadow-[0_-4px_4px_rgba(0,0,0,0.12)]">
            <div>
                <h5 className="my-4">Nails by Gaya</h5>
                <div>
                    <p className="my-2">Follow us on social media</p>
                    <div className="flex gap-2">
                        <img src={instagramIcon} alt="Instagram Icon" className="w-6 h-6 p-1"/>
                        <img src={tikTokImg} alt="TikTok Icon" className="w-6 h-6 p-1"/>
                    </div>
                </div>
            </div>
            <div className="flex gap-8">
                <div className="flex flex-col pr-8">
                    <h5 className="my-4">Company Information</h5>
                    <button className="my-2 text-left">About our services</button>
                    <button className="my-2 text-left">Privacy guidelines</button>
                    <button className="my-2 text-left">Terms of service</button>
                </div>
                <div className="flex flex-col pr-8">
                    <h5 className="my-4">Community Engagement</h5>
                    <button className="my-2 text-left">Expert Nail Artists</button>
                    <button className="my-2 text-left">Happy Clients</button>
                    <button className="my-2 text-left">Nail Art Trends</button>
                </div>
                <div className="flex flex-col pr-8">
                    <h5 className="my-4">Help Center</h5>
                    <button className="my-2 text-left">Customer Support</button>
                    <button className="my-2 text-left">FAQs Mobile App</button>
                    <button className="my-2 text-left">Support</button>
                </div>
            </div>
        </footer>
    );
}
