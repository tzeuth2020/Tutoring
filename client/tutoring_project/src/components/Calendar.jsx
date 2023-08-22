import { useState } from 'react';
import Calendar from 'react-calendar';

export function CalendarView( { isLoggedIn }) {
    const [date, setDate] = useState(new Date());
    
    if (isLoggedIn === 'none') {
        return (
            <h1>Please Login To View Calendar</h1>
        );
    } else if (isLoggedIn === 'user') {
        return (
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date}/>
            </div>
        );
    } else {
        return (
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date}/>
            </div>
        );
    }
}