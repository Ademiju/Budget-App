import React from "react"
import "./Feature.css"
import flight from "../assets/flight.svg"
import Hotel from "../assets/hotel.svg"
import location from "../assets/location.svg"
import user from "../assets/user.svg"
import calender from "../assets/calender.svg"
import search from "../assets/search.svg"
import plane from "../assets/plane.svg"
const Feature = () =>{
    return(
        <div>
            <div className="feature">
                <button className="flight">
                <img src={flight}  height="26px" alt="flight"/>
                Flight
                </button>
                <button className="hotel">
                <img src={Hotel} height="26px" alt="hotel"/>
                Hotel
                </button>
            </div>
            <div className="feature2">
                <div className="feature-container1">
                    <div className="features1">
                        <div className="feature-icon"><img src={location}  height="20px" alt="location"/></div>
                        <div><h3>Location</h3>
                        <p>Where are you going?</p></div>
                    </div>
                    <div className="features2">
                        <div className="feature-icon"><img src={user}  height="20px" alt="flight"/></div>
                        <div><h3>Travelers</h3>
                        <p>Add guests</p></div>
                    </div>

                </div>
                <div className="circle">
                <div className="plane-icon"><img src={plane}  width= "35px" height="35px" alt="plane"/></div>
                </div>
                <div className="feature-container2">
                    <div className="features1">
                        <div className="feature-icon"><img src={calender}  height="20px" alt="calender"/></div>
                        <div><h3>Check in</h3>
                        <p>Add date</p></div>
                    </div>
                    <div className="features2">
                        <div className="feature-icon"><img src={calender}  height="20px" alt="calender"/></div>
                       <div><h3>Check out</h3>
                        <p>Add guests</p></div> 
                    </div>
                </div>
                <button className="search-btn">
                    <img src ={search} height = "35px" alt="search"/>
                    </button>
            </div>
        </div>
    )
}
export default Feature