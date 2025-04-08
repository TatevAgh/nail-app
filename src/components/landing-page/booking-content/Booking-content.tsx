import './Booking-content.css';
import Calendar from '../calendar/Calendar.tsx';
import { TimeSlots } from '../time-slots/Time-slots.tsx';
import { ArtistContent } from '../artist-content/Artist-content.tsx';
import { ServiceOptions } from '../service-options/Service-options.tsx';
import { ConfirmButton } from '../confirm-button/Confirm-button.tsx';

export function BookingContent() {



    return(
        <>
            <div className="booking-content">
                <ArtistContent/>
                <Calendar />
                <TimeSlots />
                <ServiceOptions/>
                <ConfirmButton/>
            </div>
        </>
    );
}
