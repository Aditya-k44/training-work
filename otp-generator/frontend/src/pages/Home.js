import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
 
function Home() {

    const navigate = useNavigate();

    useEffect(()=>{
        const loggedIn = localStorage.getItem("loggedIn");
        if (!loggedIn) {
            navigate("/login")
        }
    },[navigate])
    
  return (
    <div>
      <h1>Welcome You are logged in.</h1>
      <button onClick={()=>{
        localStorage.clear();
        navigate("/login");
      }}>Logout</button>
    </div>
  )
}

export default Home
