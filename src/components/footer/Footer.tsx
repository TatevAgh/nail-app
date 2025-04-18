import './Footer.css';
import instagramIcon from './../../assets/img/instagram.png';
import tikTokImg from './../../assets/img/tik-tok.png';

export function Footer() {

    //TODO change p to buttons, add functions for redirecting

    return (
        <footer className="footer">
            <div className="artist-data">
                <h5>Nails by Gaya</h5>
                <div>
                    <p>Follow us on social media</p>
                    <div className="icons">
                        <img src={instagramIcon} alt="Instagram Icon"/>
                        <img src={tikTokImg} alt="TikTok Icon"/>
                    </div>
                </div>
            </div>
            <div className="website-information">
                <div className="company-information info">
                    <h5>Company Information</h5>
                    <p>About our services</p>
                    <p>Privacy guidelines </p>
                    <p>Terms of service</p>
                </div>
                <div className="community-information info">
                    <h5>Community Engagement</h5>
                    <p>Expert Nail Artists </p>
                    <p>Happy Clients</p>
                    <p>Nail Art Trends</p>
                </div>
                <div className="help-information info">
                    <h5>Help Center</h5>
                    <p>Customer Support </p>
                    <p>FAQs Mobile App </p>
                    <p>Support</p>
                </div>
            </div>
        </footer>
    );
}
