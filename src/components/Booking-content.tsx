import avatar from '../assets/img/logo.jpg';
import phone from '../assets/img/phone-call.png';
import message from '../assets/img/mail.png';
import location from '../assets/img/map.png';
import calendar from '../assets/img/calendar_747310.png';
import leftArrow from '../assets/img/angle_18991472.png';
import rightArrow from '../assets/img/oie_27131325U7cGCXqE.png';

export function BookingContent() {


    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthList = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const lastDay = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayPrevMonth = new Date(year, month, 0).getDate();

    let startIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    let weeks = [];
    let week: any = {};

    for (let i = startIndex - 1; i >= 0; i--) {
        week[weekDays[i]] = { day: lastDayPrevMonth - (startIndex - 1 - i), type: 'prev' };
    }

    for (let day = 1; day <= lastDay; day++) {
        week[weekDays[startIndex]] = { day, type: 'current' };
        startIndex++;

        if (startIndex === 7) {
            weeks.push(week);
            week = {};
            startIndex = 0;
        }
    }

    let nextMonthDay = 1;
    while (Object.keys(week).length < 7) {
        week[weekDays[startIndex]] = { day: nextMonthDay, type: 'next' };
        nextMonthDay++;
        startIndex++;

        if (startIndex === 7) {
            weeks.push(week);
        }
    }

    return(
        <>
            <div className="booking-content">
                <div className='artist-content'>
                    <img className='avatar' src={avatar} alt='Artist avatar'/>
                    <div className='artist-information'>
                        <h4>Nail Artistry, Salon</h4>
                        <p>Manicure & Pedicure Services</p>
                        <p className='working-info'>Mon-Fri, 8:30-11:00 AM</p>
                    </div>
                    <div className='contact-information'>
                        <button>
                            <img src={phone} alt="Phone Phone"/>
                        </button>
                        <button>
                            <img src={message} alt="Message"/>
                        </button>
                        <button>
                            <img src={location} alt="Location"/>
                        </button>
                    </div>
                </div>
                <div className='calendar-content'>
                    <div className='month'>
                        <img src={calendar} alt="Calendar"/>
                        <div className='month-info'>
                            <span className="prev"><img src={leftArrow}/></span>
                            <p style={{'display': 'flex'}}>{monthList[month]}<br/><span style={{'margin': '0 0.5rem'}}>{today.getFullYear()}</span>
                            </p>
                            <span
                                className="next"
                                onClick={() => {
                                    console.log('+1');
                                }}
                            ><img src={rightArrow}/></span>
                        </div>
                        <span></span>
                    </div>
                    <table className='weekdays'>
                        <thead>
                        <tr>
                            {weekDays.map(day => <th key={day}>{day}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {weeks.map((week, index) => (
                            <tr key={index}>
                                {weekDays.map(day => (
                                    <td
                                        onClick={() => {
                                            console.log(week[day].day === today.getUTCDate())
                                        }}
                                        key={day}
                                        className={(week[day].day > today.getUTCDate() && week[day].type === 'current' )
                                        || (week[day].day === today.getUTCDate() && week[day].type === 'current')
                                        || week[day].type === 'next'  ? week[day].type  : 'unavailable'}
                                        id={(week[day].day === today.getUTCDate() && week[day].type === 'current' ) ? 'today' : ''}
                                    >
                                        {week[day]?.day}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}
