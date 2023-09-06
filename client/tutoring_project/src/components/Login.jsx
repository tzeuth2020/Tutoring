import { useState } from "react";

export function Login({ loginStatus, setLogin }) {
    
    const [emailText, setEmailText] = useState("");
    const [passwordText, setPasswordText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitting");
        const loginCredentials = { email: emailText, password: passwordText };
        try {
            const response  = await fetch ('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(loginCredentials)
            })
            
            if (!response.ok) {
                const errorData = await response.json();
                console.log("This was the error " + errorData);
                alert(errorData.message);
            } else {
                const responseData = await response.json();
                console.log(responseData);
                setLogin(responseData.status);
                setEmailText("");
                setPasswordText("");
            }
        } catch(err)  {
            console.error("The error is" + err);
        }
    }
    
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log("submitting");
        const loginCredentials = { email: emailText, password: passwordText};
        try {
            const response  = await fetch ('http://localhost:8080/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(loginCredentials)
            })
            
            if (!response.ok) {
                const errorData = await response.json();
                console.log("This was the error " + errorData);
                alert(errorData.message);
            } else {
                const responseData = await response.json();
                console.log(responseData);
                setLogin(responseData.status);
                setEmailText("");
                setPasswordText("");
            }
        } catch(err)  {
            console.error("The error is" + err);
        }
    }
    
    async function handleEmail(e) {
        setEmailText(e.target.value);
    }

    async function handlePassword(e) {
        setPasswordText(e.target.value);
    }
    
    if (loginStatus === 'admin') {
        return (
            <div className="container" id="login-form-container">
                <div className="col" id="col-containing-form">
                    <div id="FormContainer">
                        <h3 id="login-title">Signup Students:</h3>
                        <form onSubmit={ handleSignup } id="login-form">
                            <ul id="login-form-list">
                                <li className="login-list-element">
                                    <input type="text" id="enter-Username" name="email" placeholder="Email"
                                        value = {emailText} onChange = { handleEmail}/>
                                </li>
                                <li className="login-list-element">                                    
                                    <input type="password" id="password-enter" name="password" placeholder="Password"
                                        value = {passwordText} onChange = {handlePassword} />
                                </li>
                                <li className="submit-button-list">
                                    <button type="submit" className = "submit-button">Sign Up</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else if (loginStatus === "user") {
        return ( 
            <div className="container" id="login-form-container">
                <div className="col" id="col-containing-form">
                    <div id="FormContainer">
                        <h3 id="login-title">Student Login:</h3>
                        <form onSubmit={ handleSubmit } id="login-form">
                            <ul id="login-form-list">
                                <li className="login-list-element">
                                    <input type="text" id="enter-Username" name="email" placeholder="Email"
                                        value = {emailText} onChange = { handleEmail}/>
                                </li>
                                <li className="login-list-element">                                    
                                    <input type="password" id="password-enter" name="password" placeholder="Password"
                                        value = {passwordText} onChange = {handlePassword} />
                                </li>
                                <li className="submit-button-list">
                                    <button type="submit" className = "submit-button">Submit</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div id='response-box-container'>
                    <div className="col" id="response-container"> 
                        <h1 id="success-text"> Login Successful</h1>
                    </div>
                </div>
            </div>

        );
    } else {
        return ( 
            <div className="container" id="login-form-container">
                <div className="col" id="col-containing-form">
                    <div id="FormContainer">
                        <h3 id="login-title">Student Login:</h3>
                        <form onSubmit={ handleSubmit } id="login-form">
                            <ul id="login-form-list">
                                <li className="login-list-element">
                                    <input type="text" id="enter-Username" name="email" placeholder="Email"
                                        value = {emailText} onChange = { handleEmail}/>
                                </li>
                                <li className="login-list-element">                                    
                                    <input type="password" id="password-enter" name="password" placeholder="Password"
                                        value = {passwordText} onChange = {handlePassword} />
                                </li>
                                <li className="submit-button-list">
                                    <button type="submit" className = "submit-button">Submit</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

