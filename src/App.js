import { useContext } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { UserContext } from "./context/userContext";

export default function App() {
  const { logged } = useContext(UserContext);
  return (
    <>
      
        {!logged ? <Login /> : <Home />}
      
    </>
  );
}