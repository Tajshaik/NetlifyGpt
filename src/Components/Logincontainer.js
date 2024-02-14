import React from 'react'
import background from "../Assests/images/background.jpg"
import logo from "../Assests/images/Netflix_Logo.png"
import Login from './Login'
import Header from './Header'

const Logincontainer = () => {
  return (
    <div>
        <img className="img-background" alt="background" src={background} />
        <Header />
        <div className='form-login'>
        <Login />
        </div>
    </div>
  )
}

export default Logincontainer