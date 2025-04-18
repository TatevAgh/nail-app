import { useState } from 'react';

type BookingDate = { day: number; month: number; year: number } | null;

export function useBooking() {
    const [date, setDate] = useState<BookingDate>(null);
    const [timeSlot, setTimeSlot] = useState<string | null>(null);
    const [service, setService] = useState<string | null>(null);

    const resetBooking = () => {
        setDate(null);
        setTimeSlot(null);
        setService(null);
    };
    const validateBooking = () => {
        const invalidFields: Partial<{
            date: string;
            timeSlot: string;
            service: string;
        }> = {};

        if (!date || date.day === undefined || date.month === undefined || date.year === undefined) {
            invalidFields.date = 'Date is missing or incomplete';
        }

        if (!timeSlot) {
            invalidFields.timeSlot = 'Time slot is required';
        }

        if (!service) {
            invalidFields.service = 'Service is required';
        }
        return invalidFields;
    };

    return {
        date,
        timeSlot,
        service,
        setDate,
        setTimeSlot,
        setService,
        resetBooking,
        validateBooking,
    };
}
