

export function TimeList({list, type}) {
    console.log(list);
    console.log(type);
    if (list.length === 0 && type === "session") {
        return(<h4 className ="time-header"> No taken sessions today</h4>)
    } else if (list.length === 0) {
        return(<h4 className ="time-header"> No availiable times today</h4>)
    } else {
        return(
            <ul className = 'timeList'>
                {list.map((data) => {
                    return(
                        <li className="timeListItem" key = {data._id}> {data.start_time} - {data.finish_time} </li>
                    )
                })}
            </ul>
        )
    }
}