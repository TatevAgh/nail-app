import './Main-content.css';
import { BookingContent } from '../booking-content/Booking-content.tsx';


export function MainContent() {


    return (
        <div className="main-content">
            <div className="content">
                <h2>Book your nail appointment online</h2>
                <p>Select date, time, and service type</p>
            </div>
            <BookingContent/>
        </div>
    );
}
