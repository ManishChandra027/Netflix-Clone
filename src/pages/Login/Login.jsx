import React, { useState } from 'react'
import './Login.css';
import logo from '../../assets/logo.png'
import { login,signUp, } from '../../firbase';
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState,setSignState]=useState("Sign In"); //state variable
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false)

  const user_auth=async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState==="Sign In"){
        await login(email,password);

    }else{
      await signUp(name,email,password);
      
    }
    setLoading(false);
  }



  return (
    loading? <div className="login-spinner">
      <img src={netflix_spinner}></img>
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo'></img>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
            {signState==="Sign Up"?
            <input type='text' value={name} onChange={(event)=>{setName(event.target.value) }} placeholder='Your Name'></input>:<></>}
            <input type='email' value={email} onChange={(event)=>{ setEmail(event.target.value) }} placeholder='Email Address'></input>
            <input type='password' value={password} onChange={(event)=>{setPassword(event.target.value )}} placeholder='Password'></input>
            <button onClick={user_auth} type='submit'>{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type='checkbox' ></input>
                <label htmlFor=''>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
        </form>
        <div className="form-switch">
            {signState==="Sign Up"?<p>Already have account? <span onClick={()=>{setSignState("Sign In")}} >Sign In now</span></p>:
            <p>New on Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up now</span></p>}
          
        </div>
      </div>
      
    </div>
  )
}

export default Login
