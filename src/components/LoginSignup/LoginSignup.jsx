import React  from 'react'
import './LoginSignup.css'
import email from '../../assets/email.png'
import name from '../../assets/name.png'
import password from '../../assets/password.png'



const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
            <img src={name} alt="" />
            <input type="email" placeholder='Name'/>
            </div>
            <div className="input">
                <img src={email} alt="" />
                <input type="text" placeholder='Email Id'/>
                
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password"> Lost Password? <span>Click here!</span></div>
        <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Log In</div>
        </div>

    </div>
  )
}

export default LoginSignup