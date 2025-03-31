import React , { useState } from 'react'
import './LoginSignup.css'
import email from '../../assets/email.png'
import name from '../../assets/name.png'
import password from '../../assets/password.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Log In");

    return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">

            {action=="Log In"?<div></div>:<div className="input">
            <img src={name} alt="" />
            <input type="email" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={email} alt="" />
                <input type="text" placeholder='Email Id'/>
                
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>

        {action=="Sign Up"?<div></div>:<div className="forgot-password"> Lost Password? <span>Click here!</span></div>}
        <div className="submit-container">
                <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>
        </div>

    </div>
  )
}

export default LoginSignup