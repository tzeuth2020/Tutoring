import { useState } from 'react';
import Calendar from 'react-calendar';
import { TimeDisplay } from './TimeDisplay';
const API_URL='http://localhost:8080/calendar'



export function CalendarView( { isLoggedIn }) {
    const [date, setDate] = useState(new Date());
    const [startTimeAvailablity, setStartTimeAvailability] = useState("");
    const [finishTimeAvailability, setFinishTimeAvailability] = useState("");
    const [startTimeARemove, setStartTimeARemove]= useState("");
    const [finishTimeARemove, setFinishTimeARemove] = useState("");
    const [startTimeSession, setStartTimeSession] = useState("");
    const [finishTimeSession, setFinishTimeSession] = useState("");
    const [startTimeSRemove, setStartTimeSRemove]= useState("");
    const [finishTimeSRemove, setFinishTimeSRemove] = useState("");

    const handleDateChange = (newDate) => {
        setDate(newDate);
    }

    const addAvailabilityWindow = async (e) => {
        e.preventDefault();
        console.log("submitting time window");
        const windowDetails = { start_time: startTimeAvailablity, finish_time: finishTimeAvailability, date: date, type: "window"};
        windowDetails.date.setHours(0, 0, 0, 0);
        try {
                const response  = await fetch (API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(windowDetails)
                })
                
                if (!response.ok) {
                    const errorData = await response.json();
                    console.log("This was the error " + errorData);
                    alert(errorData.message);
                } else {
                    const responseData = await response.json();
                    console.log(responseData);
                    setStartTimeAvailability("");
                    setFinishTimeAvailability("");
                }
            } catch(err)  {
                console.error("The error is" + err);
            }
    } 

    const removeAvailabilityWindow = async (e) => {
        e.preventDefault();
        console.log("submitting time window");
        const windowDetails = { start_time: startTimeARemove, finish_time: finishTimeARemove, date: date, type: "window"};
        windowDetails.date.setHours(0, 0, 0, 0);
        try {
                const response  = await fetch (API_URL, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(windowDetails)
                })
                
                if (!response.ok) {
                    const errorData = await response.json();
                    console.log("This was the error " + errorData);
                    alert(errorData.message);
                } else {
                    const responseData = await response.json();
                    console.log(responseData);
                    setStartTimeARemove("");
                    setFinishTimeARemove("");
                }
            } catch(err)  {
                console.error("The error is" + err);
            }
    } 

    const addSession = async (e) => {
        e.preventDefault();
        console.log("submitting time window");
        const windowDetails = { start_time: startTimeSession, finish_time: finishTimeSession, date: date, type: "session"};
        windowDetails.date.setHours(0, 0, 0, 0);
        try {
                const response  = await fetch (API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(windowDetails)
                })
                
                if (!response.ok) {
                    const errorData = await response.json();
                    console.log("This was the error " + errorData);
                    alert(errorData.message);
                } else {
                    const responseData = await response.json();
                    console.log(responseData);
                    setStartTimeSession("");
                    setFinishTimeSession("");
                }
            } catch(err)  {
                console.error("The error is" + err);
            }
    } 

    const removeSession = async (e) => {
        e.preventDefault();
        console.log("submitting time window");
        const windowDetails = { start_time: startTimeSRemove, finish_time: finishTimeSRemove, date: date, type: "session"};
        windowDetails.date.setHours(0, 0, 0, 0);
        try {
                const response  = await fetch (API_URL, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(windowDetails)
                })
                
                if (!response.ok) {
                    const errorData = await response.json();
                    console.log("This was the error " + errorData);
                    alert(errorData.message);
                } else {
                    const responseData = await response.json();
                    console.log(responseData);
                    setStartTimeSRemove("");
                    setFinishTimeSRemove("");
                }
            } catch(err)  {
                console.error("The error is" + err);
            }
    } 

    async function handleStartAvailable(e) {
        setStartTimeAvailability(e.target.value);
    }

    async function handleFinishAvailable(e) {
        setFinishTimeAvailability(e.target.value);
    }

    async function handleStartARemove(e) {
        setStartTimeARemove(e.target.value);
    }

    async function handleFinishARemove(e) {
        setFinishTimeARemove(e.target.value);
    }

    async function handleStartSession(e) {
        setStartTimeSession(e.target.value);
    }

    async function handleFinishSession(e) {
        setFinishTimeSession(e.target.value);
    }

    async function handleStartSRemove(e) {
        setStartTimeSRemove(e.target.value);
        setDate(date);
    }

    async function handleFinishSRemove(e) {
        setFinishTimeSRemove(e.target.value);
        setDate(date);
    }
    
    
    if (isLoggedIn === 'none') {
        return (
            <h1 id="login-error">Please Login To View Calendar</h1>
        );
    } else if (isLoggedIn === 'user') {
        return (
            <div className='calendar-container'>
                <div className='row' id='calendar-box'>
                    <div className ='column-center'> 
                        <Calendar onChange={setDate} value={date}/>
                    </div>
                    <div className='column-center'>
                        <TimeDisplay date={date}></TimeDisplay>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='calendar-container'>
                <div className='row' id="calendar-box">
                    <div className="column-center">
                        <Calendar onChange={handleDateChange} value={date}/>
                    </div>
                    <div className='column-center'>
                        <TimeDisplay date={date}></TimeDisplay>
                    </div>
                    <div className='column-center'>
                        <div className = 'row-center'>
                            <div className='column-form'>
                                <div className="entry-container" id="col-containing-form">
                                    <div id="FormContainer">
                                        <h3 id="calendar-title">Add Availability Window:</h3>
                                        <form onSubmit={ addAvailabilityWindow } id="calendar-form">
                                            <ul id="calendar-form-list">
                                                <li className="calendar-list-element">
                                                    <input type="text" id="enter-Start" name="startTime" placeholder="Start Time"
                                                        value = {startTimeAvailablity} onChange = { handleStartAvailable }/>
                                                </li>
                                                <li className="calendar-list-element">                                    
                                                    <input type="text" id="enter-Finish" name="finishTime" placeholder="Finish Time"
                                                        value = {finishTimeAvailability} onChange = { handleFinishAvailable } />
                                                </li>

                                                <li className="submit-button-list">
                                                    <button type="submit" className = "submit-button">Submit</button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='column-form'>
                                <div className="entry-container" id="col-containing-form">
                                    <div id="FormContainer">
                                        <h3 id="calendar-title">Remove Availability Window:</h3>
                                        <form onSubmit={ removeAvailabilityWindow } id="calendar-form">
                                            <ul id="calendar-form-list">
                                                <li className="calendar-list-element">
                                                    <input type="text" id="enter-Start" name="startTime" placeholder="Start Time"
                                                        value = {startTimeARemove} onChange = { handleStartARemove }/>
                                                </li>
                                                <li className="calendar-list-element">                                    
                                                    <input type="text" id="enter-Finish" name="finishTime" placeholder="Finish Time"
                                                        value = {finishTimeARemove} onChange = { handleFinishARemove } />
                                                </li>

                                                <li className="submit-button-list">
                                                    <button type="submit" className = "submit-button">Submit</button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='column-center'>
                        <div className = 'row-center'>
                            <div className='column-form'>
                                <div className="entry-container" id="col-containing-form">
                                    <div id="FormContainer">
                                        <h3 id="calendar-title">Add Student Session:</h3>
                                        <form onSubmit={ addSession } id="calendar-form">
                                            <ul id="calendar-form-list">
                                                <li className="calendar-list-element">
                                                    <input type="text" id="enter-Start" name="startTime" placeholder="Start Time"
                                                        value = {startTimeSession} onChange = { handleStartSession }/>
                                                </li>
                                                <li className="calendar-list-element">                                    
                                                    <input type="text" id="enter-Finish" name="finishTime" placeholder="Finish Time"
                                                        value = {finishTimeSession} onChange = { handleFinishSession } />
                                                </li>

                                                <li className="submit-button-list">
                                                    <button type="submit" className = "submit-button">Submit</button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='column-form'>
                                <div className="entry-container" id="col-containing-form">
                                    <div id="FormContainer">
                                        <h3 id="calendar-title">Remove Student Session:</h3>
                                        <form onSubmit={ removeSession } id="calendar-form">
                                            <ul id="calendar-form-list">
                                                <li className="calendar-list-element">
                                                    <input type="text" id="enter-Start" name="startTime" placeholder="Start Time"
                                                        value = {startTimeSRemove} onChange = { handleStartSRemove }/>
                                                </li>
                                                <li className="calendar-list-element">                                    
                                                    <input type="text" id="enter-Finish" name="finishTime" placeholder="Finish Time"
                                                        value = {finishTimeSRemove } onChange = { handleFinishSRemove } />
                                                </li>

                                                <li className="submit-button-list">
                                                    <button type="submit" className = "submit-button">Submit</button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}