import React, {useContext} from 'react'
import Home from './Home';
import Register from './Register';
import { UserContext } from './App';
export default function Login() {
    const {flag, setFlag} = useContext(UserContext);
    if(flag == 1) {
        <Home/>
    } else if (flag==2) {
        <Register/>
    }
  return (
    <>
    <div>Login</div>
    <button onClick={() => setFlag((prev) => 2)}>Login</button>
    <button onClick={() => setFlag((prev)=> 1)}>Create Account</button>
    {flag ===1 && (<Register/>)}
    </>
  )
}
