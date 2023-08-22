import React from 'react'
import  { useQueryClient } from 'react-query'
import updateCalendarRequest from '../api/updateCalendarRequest';

export const CalenderEntry = ({ calendarEntry }) => {
    
    const queryClient = new useQueryClient();
    
    const { mutate: toggleCompletion} = useMutation(() => {
        return updateCalendarRequest(calendarEntry);
    }, {
        onSettled: ()=> {
            QueryClient.invalidateQueries('calendarEntries')
        }

    });



    return (
        <div>
            <input 
                checked={calendarEntry.student}
                type="text" 
                onChange={(e) => updateCalendarRequest({
                    ...calendarEntry,
                    text: e.target.value,
                })} />
            {calendarEntry.student}
        </div>
    )
}