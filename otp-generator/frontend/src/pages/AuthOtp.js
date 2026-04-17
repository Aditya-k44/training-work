import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AuthOtp = () => {

    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const id = location.state?.id;

    useEffect(()=>{
    if (localStorage.getItem("loggedIn")) {
        navigate("/home");
    }

    if(!id){
        navigate("/login");
    }
  },[navigate, id]);

  const verifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:8000/auth/otpAuth", {id, otp});
      console.log(res.data.message);
      if (res.data.message === "Login succesful") {
        
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userId", id);
        navigate("/home");

      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error verifying OTP");
    }
  };

  return (
    <div>
       <h2>Enter OTP</h2>
      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Verify</button>
    </div>
  )
}

export default AuthOtp
