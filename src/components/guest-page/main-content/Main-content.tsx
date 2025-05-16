// import './Main-content.css';
import { BookingContent } from '../booking-content/Booking-content.tsx';


export function MainContent() {


    return (
        <div className="w-full box-border mt-8 p-0 max-md:w-full max-md:max-w-none max-md:p-0">
            {/*    <h2>Book your nail appointment online</h2>*/}
            {/*    <p>Select date, time, and service type</p>*/}
            {/*</div>*/}
            <BookingContent/>
        </div>
    );
}
