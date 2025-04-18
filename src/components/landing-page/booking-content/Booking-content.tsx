import './Booking-content.css';
import Calendar from '../calendar/Calendar.tsx';
import { TimeSlots } from '../time-slots/Time-slots.tsx';
import { ArtistContent } from '../artist-content/Artist-content.tsx';
import { ServiceOptions } from '../service-options/Service-options.tsx';
import { ConfirmButton } from '../confirm-button/Confirm-button.tsx';
import { useBooking } from '../../../hooks/ useBooking.ts';

export function BookingContent() {
    const {
        date,
        timeSlot,
        service,
        setDate,
        setTimeSlot,
        setService
    } = useBooking();

    const handleConfirm = () => {
        console.log("Booking confirmed with:", {
            date,
            timeSlot,
            service
        });

    };

    return(
        <>
            <div className="booking-content">
                <ArtistContent/>
                <Calendar onDateSelect={setDate} />
                <TimeSlots onSlotSelect={setTimeSlot} />
                <ServiceOptions onServiceSelect={setService} />
                <ConfirmButton onClick={handleConfirm} />
            </div>
        </>
    );
}
