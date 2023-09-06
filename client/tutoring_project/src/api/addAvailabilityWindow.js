const API_URL = 'http://localhost:8080/calendar';

const addAvailabilityWindow = async (e, startTime, finishTime, Date) => {
    e.preventDefault();
    console.log("submitting time window");
    const windowDetails = { start_time: startTime, finish_time: finishTime, date: Date, type: "window "};
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
                setLogin(responseData.status);
            }
        } catch(err)  {
            console.error("The error is" + err);
        }
} 

export default addAvailabilityWindow;