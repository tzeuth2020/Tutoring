import { Resources}  from "./Resources";
import { MainBody } from "./mainBody";
import { Login } from "./Login";
import { useState } from "react";
import { CalendarView } from "./Calendar";


export function SelectedBody({currentTab}) {
    const [loginStatus, setLoginStatus] = useState('none');
    
    if (currentTab === 'Resources') {
        return (<Resources />);
    } else if (currentTab === 'Login') {
        return (<Login loginStatus={loginStatus} setLogin= {setLoginStatus}/>);
    } else if (currentTab === 'Calendar') {
        return (<CalendarView isLoggedIn={loginStatus}/>);
    } 
    return (<MainBody />);
}

