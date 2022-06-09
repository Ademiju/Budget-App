import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

const LoginB = ({setAlert}) => {

    let history = useHistory();

    const [userDetails, setUserDetails] = useState({identity: "", password: ""})


    const handleUserInput = (e) => {
        setUserDetails({...userDetails, [e.target.name] : e.target.value})
    }

    const handleLogin = () => {
        let usersRepository  = JSON.parse(localStorage.getItem("users"))

        let user;
        let isValid = usersRepository.some((userObject) =>{
            let idCheck = (userObject?.email === userDetails.identity ||
                userObject?.username === userDetails?.identity)
            let passwordCheck = (userObject.password === userDetails.password)
            if(idCheck && passwordCheck){
                user = userObject
            }
            return idCheck &&  passwordCheck
        })

        let {identity} = userDetails

        isValid?
            // history.push("/dashboard"):
           history.push(`/dashboard/${user.username}/?id=${identity}`) :
            // props.setAlert({ishow: true, status: "error", message: "User Details Incorrect"})
             setAlert({ishow: true, status: "error", message: "User Details Incorrect"})
       setTimeout(
           // () =>  props.setAlert({ishow: false, status: "success", message: "login successful"}),
           () =>  setAlert({ishow: false, status: "success", message: "login successful"}),
      5000 )

        // props.setCustomerName(user.username)
    }

    return (
       <div className="auth-register">
            <label>Username or Email</label>
            <input name = "identity" onChange={handleUserInput}/>

            <label>Password</label>
            <input type="password" name="password" onChange={handleUserInput}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginB;