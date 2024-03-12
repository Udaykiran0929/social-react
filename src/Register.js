import React, { useContext } from 'react'
import { UserContext } from './App'
import './Register.css'
export default function Register() {
    const {flag,setFlag}=useContext(UserContext);
  return (
    <>
    <div className='Register-model'>
    <div className='Register-model-content'>
    <div className="Rigister-header">
          <div className="Register-signup-title">Register</div>
          <div onClick={() => setFlag(() => 0)} className="close">
            &times;
          </div>
        </div>
        <input type='text'/><br/>
        <input type='text'/><br/>
        <input type='text'/><br/>
    
    <button onClick={() => setFlag((prevState) => 2)}>Submit</button>
    </div>
    </div>
    </>
  )
}