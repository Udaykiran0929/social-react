import React, {useContext} from "react";
import { UserContext } from '../context/userContext'
const Register = () => {
    const {user, setUser, logged, setLogged, users, setUsers} = useContext(UserContext)
    console.log(user);
    const handleRegister = () => {
        setUsers((prev) => [...prev, user])
        console.log(users);
        // setUser('')
        setLogged(!logged)
        // setUser('')
    }
  return (
    <>
          <input type="text" placeholder="username" onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }></input>
          <br></br>
          <input type="email" placeholder="email" onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }></input>
          <br></br>
          <input type="password" placeholder="password" onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }></input>
          <br></br>
          {/* onClick={() => setFlag((prevState) => 2)} */}
          <button onClick={handleRegister} >Register and Login</button>
  </>
  );
};

export default Register;