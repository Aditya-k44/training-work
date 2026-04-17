import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [id, setId] = useState("");
    const navigate = useNavigate();

    const sendOtp = async () => {

    if(!id){
        return alert("Enter Email or Phone number");
    }

    try {
      const res = await axios.post("http://localhost:8000/auth/send-otp", { id });
      console.log(res.data.message);
      navigate("/otpAuth", { state: { id } });
    } catch (err) {
      alert(err.response?.data?.error || "Error");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Email or Phone"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>
    </div>
  )
}

export default Login
