import React, {useState} from 'react';
import Budget from "../../Budget";

const Login = ({setIsSubmitted, setAlert}) => {
    let[loginDetails, setLoginDetails] = useState({username: "", password:""})

    const handleUserInput = (e) => {
        setLoginDetails({...loginDetails, [e.target.name] : e.target.value})
    }

    const handleLogin = (e) => {
        e.preventDefault()
        //localStorage.getItem("users"):

        let users = JSON.parse(window.localStorage.getItem('users'))
        //console.log(users);

        users.map(user => {
            if (user.username === loginDetails.username && user.password ===loginDetails.password) {
                setIsSubmitted(true)
            } else {
                setAlert({ishow: true, status: "error", message: "incorrect details"})
            }
        })
    }

    return (
        <div>
            <h1>LOGIN</h1>
         <div className="auth-register">

            <label>Username</label>
            <input name = "username" onChange={handleUserInput}/>
             <br/>
            <label>Password</label>
            <input type="password" name="password" onChange={handleUserInput}/>
             <br/>
            <button onClick={handleLogin}>Login</button>
        </div>
        </div>
    );
};

export default Login;