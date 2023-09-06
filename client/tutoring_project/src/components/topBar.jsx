import React from "react";
import logo from "../images/Zeuthen Letterhead.png";

export function TopBar() {
    return (
        <header>
            <div className = "container-fluid" id="top-bar">
                <div className = "row pt-5" id="top-row">
                <div className = "col-2">
                    <img className = "img-fluid" src={logo} id="personal_logo" width ="170" height ="120" />
                </div>
                <div className ="col justify-content-left">
                    <h1 className = "top-text text-left" id="site-title"> Kathryn Zeuthen Reading Instruction</h1>
                    <h5 className = "top-subheader" id="sub-title">Orton-Gillingham Academy, Certified Level</h5> 
                </div>
                <div className = "col-2">
                </div>
                </div>
            </div>
        </header>
    );
}