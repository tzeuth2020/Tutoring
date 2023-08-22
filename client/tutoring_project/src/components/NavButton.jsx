import React from "react";



export function NavButton({currentTab, name, setTab}) {
    if (currentTab === name) {
        return (
            <button className='ActiveNavButton' onClick={()=>
                {setTab(name);}} >
                {name}
            </button>
        );
    }
    return (
        <button className='NavButton' onClick={()=>
            {setTab(name);}} >
            {name}
        </button>
    );
}