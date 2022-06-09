import React, {useState} from 'react';
// import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import "./Authentication.css"
import LoginB from "./components/authentication/LoginB";

const Authentication = (props) => {
    const [auth, setAuth] = useState("register")
    const [alert, setAlert] = useState({ishow: false, status: "", messsage: ""})

    const switchHandler = () => {
        if (auth === "login") {
            setAuth("register")
        } else {
            setAuth("login")
        }
    }
    return (
        <div className="auth-container">
            <div className="auth-body">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    { alert.ishow &&
                        <div className= "alert"
                    style={alert.status ==="error" ?
                        {backgroundColor: "red"} :
                        {backgroundColor: "teal"}}>
                        {alert.message}
                    </div> }
                    <button onClick={switchHandler}>{auth === "login" ? "Register" : "Login" }</button>
                </div>
                {/*{auth === "login" ? <Login setAlert = {setAlert} setIsSubmitted={ props.setIsSubmitted}/> : <Register setAlert = {setAlert}/> }*/}
                {auth === "login" ? <LoginB setCustomerName = {props.setCustomerName} setAlert = {setAlert}/> : <Register setAlert = {setAlert}/> }
            </div>
        </div>
    );
};

export default Authentication;