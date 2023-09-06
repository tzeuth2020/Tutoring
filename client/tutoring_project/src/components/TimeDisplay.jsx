import { useState } from 'react';
import { useEffect } from 'react';
import { TimeList } from './TimeList';
const API_URL='http://localhost:8080/calendar'

export function TimeDisplay( {date} ) {
    const [windows, setWindows] = useState([])
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        getTimes();
    }, [date]);

    

    async function getTimes() {
        try {
            const windows = await fetch(API_URL + "/" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear(), {
                method: 'GET',
            })

            if (!windows.ok) {
                const errorData = await windows.json();
                console.log("This was the error " + errorData);
                alert(errorData.message);
            } else {
                const responseData = await windows.json();
                const sessionList = [];
                const windowList = [];
                console.log(responseData);
                responseData.forEach((item) => {
                    console.log(item);
                    if (item && item.type === "session") {
                        sessionList.push(item);
                    } else {
                        windowList.push(item);
                    }
                });
                setWindows(windowList);
                setSessions(sessionList);
            }
        } catch(err)  {
            console.error("The error is " + err);
        }
    }

    return(
        <div className = 'column-center' id='timeContainer'>
            <div className = 'row-center'>
                <div id='windowContainer'>
                    <h4 id='windowTitle'> Teaching Windows </h4>
                    <TimeList list={windows} type="window"> </TimeList>
                </div>
                <div id='sessionContainer'>
                    <h4 id='sessionTitle'> Taken Sessions </h4>
                    <TimeList list={sessions} type="session"> </TimeList>
                </div>
            </div>
        </div>
    )

    
}

