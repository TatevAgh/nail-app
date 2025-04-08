import useCalendar from '../../../hooks/useCalendar.ts'
import './Calendar.css';
import leftArrow from '../../../assets/img/angle_18991472.png';
import rightArrow from '../../../assets/img/oie_27131325U7cGCXqE.png';
import { useState } from 'react';

export function Calendar() {
    const { year, month, monthList, weekDays, weeks, currentData, goToNextMonth, goToPrevMonth } = useCalendar();
    const [selectedDate, setSelectedDate] = useState<{ day: number, month: number, year: number } | null>(null);

    const handleDateClick = (day: number, month: number, year: number, type: string) => {
        if (type === 'unavailable') return;

        setSelectedDate({ day, month, year });
        console.log("Selected Date:", { day, month, year });
    };
    return (
        <div className="calendar-content">
            <div className="month">
                <span className="prev" onClick={goToPrevMonth}>
                    <img src={leftArrow} alt="Previous" />
                </span>
                <p>
                    {monthList[month]} <span>{year}</span>
                </p>
                <span className="next" onClick={goToNextMonth}>
                    <img src={rightArrow} alt="Next" />
                </span>
            </div>
            <table className="weekdays">
                <thead>
                <tr>
                    {weekDays.map((day: string) => (
                        <th key={day}>{day}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {weeks.map((week, index) => (
                    <tr key={index}>
                        {weekDays.map((day: string) => {
                            const dateInfo = week[day];
                            const isSelected = selectedDate &&
                                dateInfo?.day === selectedDate.day &&
                                month === selectedDate.month &&
                                year === selectedDate.year && dateInfo?.isFuture;

                            return (
                                <td key={day}
                                    className={`${dateInfo?.isFuture ? dateInfo?.type : 'unavailable'} ${isSelected ? 'selected' : ''}`}
                                    onClick={() => dateInfo?.isFuture && handleDateClick(dateInfo?.day, month, year, dateInfo?.type)}
                                    id={(dateInfo?.day === currentData.currentDay
                                        && dateInfo?.type === 'current'
                                        && currentData.currentMonth === month
                                        && currentData.currentYear === year) ? 'today' : ''}
                                >
                                    {dateInfo?.day}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;
