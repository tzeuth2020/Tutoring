import React from "react";

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light " id="navbar">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/Users/thomas/coding_projects/tutoring_project/tutoring.html">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="login.html">Student Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Users/thomas/coding_projects/tutoring_project/resources.html">Resources</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}