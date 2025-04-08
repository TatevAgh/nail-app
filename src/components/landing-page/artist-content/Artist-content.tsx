import avatar from '../../../assets/img/logo.jpg';
import phone from '../../../assets/img/phone-call.png';
import message from '../../../assets/img/mail.png';
import location from '../../../assets/img/map.png';
import './Artist-content.css';

export function ArtistContent() {


    return (
        <div className='artist-content'>
            <img className='avatar' src={avatar} alt='Artist avatar'/>
            <div className='artist-information'>
                <h4>Nail Artistry, Salon</h4>
                <p>Manicure & Pedicure Services</p>
                <p className='working-info'>Mon-Fri, 8:30-11:00 AM</p>
            </div>
            <div className='contact-information'>
                <button>
                    <img src={phone} alt="Phone Phone"/>
                </button>
                <button>
                    <img src={message} alt="Message"/>
                </button>
                <button>
                    <img src={location} alt="Location"/>
                </button>
            </div>
        </div>
    );
}
