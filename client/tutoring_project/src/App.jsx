import './App.css';
import '/Users/thomas/coding_projects/tutoring_project/tutoring.css'
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import { TopBar } from './components/topBar';
import { Bottombar } from './components/Bottombar';
import { NavButton } from './components/NavButton';
import { SelectedBody } from './components/SelectedBody';

function App() {
  const [date, setDate] = useState(new Date());
  const [tab, setTab] = useState('Home');


  return (
    <div className="App">
      
      <div className="topbar-container">
        <TopBar />
      </div>
      <div className="navbar-container">
        <nav className="navbar navbar-expand-sm bg-light navbar-light " id="navbar">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavButton currentTab = {tab} name = 'Home' setTab = {setTab}/>
              </li>
              <li className="nav-item">
                <NavButton currentTab = {tab} name = 'Login' setTab = {setTab}/>
              </li>
              <li className="nav-item">
                <NavButton currentTab = {tab} name = 'Resources' setTab = {setTab}/>
              </li>
              <li className="nav-item">
                <NavButton currentTab = {tab} name = 'Calendar' setTab = {setTab}/>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="body-container">
        <SelectedBody currentTab={tab} />
      </div>

      
      <div className="bottombar-container">
        <Bottombar />
      </div>
      
    </div>
  )

}



export default App;
