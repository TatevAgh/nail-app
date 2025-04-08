import { useState, useEffect } from "react";

// Define types
interface CalendarDay {
    day: number;
    type: "prev" | "current" | "next";
    isFuture?: boolean;
}

type Week = { [key: string]: CalendarDay };

function useCalendar() {
    const weekDays: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const monthList: string[] = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const today: Date = new Date();
    const currentDay = today.getUTCDate();
    const currentMonth = today.getUTCMonth();
    const currentYear = today.getUTCFullYear();
    const [year, setYear] = useState<number>(today.getFullYear());
    const [month, setMonth] = useState<number>(today.getMonth());
    const [weeks, setWeeks] = useState<Week[]>([]);

    const generateCalendar = (): Week[] => {
        const lastDay = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDayPrevMonth = new Date(year, month, 0).getDate();

        let startIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
        const weeks: Week[] = [];
        let week: Week = {};

        const today = new Date(currentYear, currentMonth, currentDay); // Current date object
        const currentDateValue = today.valueOf(); // Numeric value of the current date for comparison

        // Helper function to check if a date is in the future
        const isDateFuture = (d: number, m: number, y: number) => {
            const dateValue = new Date(y, m, d).valueOf();
            return dateValue > currentDateValue;
        };

        // Previous month days
        for (let i = startIndex - 1; i >= 0; i--) {
            const day = lastDayPrevMonth - (startIndex - 1 - i);
            week[weekDays[i]] = {
                day,
                type: 'prev',
                isFuture: isDateFuture(day, month - 1, year),
            };
        }

        // Current month days
        for (let day = 1; day <= lastDay; day++) {
            week[weekDays[startIndex]] = {
                day,
                type: "current",
                isFuture: isDateFuture(day, month, year),
            };
            startIndex++;

            if (startIndex === 7) {
                weeks.push(week);
                week = {};
                startIndex = 0;
            }
        }

        // Next month's days
        let nextMonthDay = 1;
        while (Object.keys(week).length < 7) {
            week[weekDays[startIndex]] = {
                day: nextMonthDay,
                type: "next",
                isFuture: isDateFuture(nextMonthDay, month + 1, year),
            };
            nextMonthDay++;
            startIndex++;

            if (startIndex === 7) {
                weeks.push(week);
            }
        }

        return weeks;
    };

    useEffect(() => {
        setWeeks(generateCalendar());
    }, [year, month]);

    const goToNextMonth = () => {
        setMonth((prev) => (prev + 1) % 12);
        if (month === 11) setYear((prev) => prev + 1);
    };

    const goToPrevMonth = () => {
        setMonth((prev) => (prev === 0 ? 11 : prev - 1));
        if (month === 0) setYear((prev) => prev - 1);
    };

    return {
        year,
        month,
        monthList,
        weekDays,
        weeks,
        currentData: {
            currentDay,
            currentMonth,
            currentYear,
        },
        goToNextMonth,
        goToPrevMonth,
    };
}

export default useCalendar;
