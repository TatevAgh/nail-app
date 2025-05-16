import Calendar from '../calendar/Calendar.tsx';
import { TimeSlots } from '../time-slots/Time-slots.tsx';
import { ArtistContent } from '../artist-content/Artist-content.tsx';
import { ServiceOptions } from '../service-options/Service-options.tsx';
import { ConfirmButton } from '../confirm-button/Confirm-button.tsx';
import { useBooking } from '../../../hooks/ useBooking.ts';
import { InfoValidator } from '../../modal-pages/info-validator/Info-Validator.tsx';
import { useState } from 'react';
type InvalidFieldsModel = Partial<{
    date: string;
    timeSlot: string;
    service: string;
}>;

export function BookingContent() {
    const {
        setDate,
        setTimeSlot,
        setService,
        validateBooking,
    } = useBooking();

    const [isModalOpen, setModalOpen] = useState(false);
    const [invalidFields, setInvalidFields] = useState<InvalidFieldsModel>({});

    const handleCloseModal = () => setModalOpen(false);

    const handleConfirm = () => {
        const validationResult = validateBooking();
        console.log(validationResult, 'validationResult');
        setInvalidFields(validationResult);
        setModalOpen(true);
    };

    return (
        <div className="flex flex-col items-center justify-center py-8">
            <ArtistContent />
            <Calendar onDateSelect={setDate} />
            <TimeSlots onSlotSelect={setTimeSlot} />
            <ServiceOptions onServiceSelect={setService} />
            <ConfirmButton onClick={handleConfirm} />
            <InfoValidator isOpen={isModalOpen} onClose={handleCloseModal} invalidFields={invalidFields} />
        </div>
    );
}
