import React from 'react'
import "./MyApp.css"
import ProfileCard from './components/ProfileCard'

const MyApp = () => {
  return (
        <div className='myapp-container'>
          <ProfileCard username="Damilola" hobby="Talking" />
          <ProfileCard username="Johnson" hobby="Singing" />
        </div>  
  )
}

export default MyApp 
