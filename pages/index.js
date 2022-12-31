import Register from "./Register"; 
import { useContext,useEffect } from "react";
import { AuthContext } from "./components/context/AuthContext";
import Router from "next/router";
const chatapp = () => {
  const {currentUser}=useContext(AuthContext)
  console.log(currentUser)
useEffect(()=>{
  if(currentUser===null) {
    Router.push('/Login')
  } else if (currentUser) {
     Router.push('/Home')
  }
},[currentUser])

}
export default chatapp