import { useState } from 'react';

export function useBooking() {
    const [date, setDate] = useState<{ day: number; month: number; year: number } | null>(null);
    const [timeSlot, setTimeSlot] = useState<string | null>(null);
    const [service, setService] = useState<string | null>(null);

    const resetBooking = () => {
        setDate(null);
        setTimeSlot(null);
        setService(null);
    };

    return {
        date,
        timeSlot,
        service,
        setDate,
        setTimeSlot,
        setService,
        resetBooking,
    };
}
