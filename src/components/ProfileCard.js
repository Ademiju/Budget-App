import React, { useState } from 'react'
import image from "../assets/logo.svg"
import "./ProfileCard.css"

const ProfileCard = (props) => {
    let {username, hobby} = props //hobby and username are keys in the object props and are destructured here

    const [state, setState] = useState({username: username, hobby: hobby}) //state and setStaate are destructured to return something
    //state and setstate are variables, usestate function call returns the array indices state ans set state.
    //whatever we pass in the use state is the initial value of state
    //whatever argument we pass in the function setstate on call has the ability to change the state. 

        const handleClick = () => {
            let newObject = {username: `Mr ${username}`, hobby: `My ${hobby}`} //more keys and value can be added to this and it enables us to update
            // and it will be used to update the state
            setState({...state, ...newObject}) //the presence of ...stated helps in immutability. the goal is not to deform the previous state but rather to
            //add to the state
        }   


 return (
    <div className='profile-card'>
        <img src={image} alt='profile card' className='profile-card-avatar'/>
        <div className='details-container'>
            <div className='firstName-details'>
                <p>Name</p>
                <h1>{state.username}</h1>
                {/* setstate updates states, hence why the value takes its form from the state */}
            </div>
            <div className='hobby-details'>
                <p>Hobby</p>
                <h1>{state.hobby}</h1>
            </div>
        </div>
        <button onClick = {handleClick}>Click Me</button>
    </div>
  )
}

export default ProfileCard      