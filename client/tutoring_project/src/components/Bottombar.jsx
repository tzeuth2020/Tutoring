import React from "react";
import logo from "../images/lower_logo.png";

export function Bottombar() {
    return (
        <footer>
            <div className="container-fluid" id="bottom-bar">
                <div className="row pt-4" id="bottom-row">
                <div className="col" id="picture-container">
                    <img className="img-fluid" src={logo} alt="Responsive image" id="lower-logo" />
                </div>
                </div>
            </div>
        </footer>
    );
}