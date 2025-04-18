import './Time-slots.css';
import checkboxIcon from '../../../assets/img/check-box.png';
import { useEffect, useState } from 'react';
type TimeSlotsProps = {
    onSlotSelect: (time: string) => void;
};

export function TimeSlots({onSlotSelect}: TimeSlotsProps) {
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const timeSlots = ['9:00', '10:30', '12:00', '13:30', '15:00', '17:30', '19:00', '20:30', '22:00', '23:30'];

    const selectSlot = (time: string) => {
        setSelectedSlot(time);
        onSlotSelect(time);
    };
    useEffect(() => {
        console.log(selectedSlot, 'selectedSlot');
    }, [selectedSlot]);

    return (
        <div className="time-slots-component">
            <h3>Choose a suitable time slot</h3>
            <div className="time-slots-container">
                {timeSlots.map((time) => (
                    <div key={time} className="time-slot-wrapper">
                        <button
                            className={`time-slot btn ${selectedSlot === time ? 'selected' : ''}`}
                            onClick={() => selectSlot(time)}
                        >
                            {time}
                            {selectedSlot === time &&
                                <img className="time-checkbox" alt="Checkbox icon" src={checkboxIcon}/>}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
