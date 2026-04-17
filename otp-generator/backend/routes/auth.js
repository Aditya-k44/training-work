const express = require("express");
const router = express.Router();

const users = {};

router.post("/send-otp", (req, res) =>{
    const {id} = req.body;
    const now = Date.now();

    const existing = users[id];

    if (existing && existing.blockedUntil > now) {
        return res.json({message: "try again after 10 minutes"})
    }


    const otp = Math.floor(100000 + Math.random() * 900000);

    users[id] = {
        otp: otp.toString(),
        attempts: 0,
        expiresAt: now + 5*60*1000,
        blockedUntil: 0
    }

    console.log("otp", otp);

    res.json({message: "otp sent successsfully"});
});

router.post("/otpAuth", (req, res)=>{

    const {id, otp} = req.body;
    const user = users[id];
    const now =  Date.now();

    if (!user) {
        return res.json({message: "no otp found "});
    }

    if (user.blockedUntil >now) {
        res.json({message: "blocked, try after some time"});
    }

    if (user.expiresAt < now){
        return res.json({message: "otp expired"});
    }

    if (user.otp === otp) {
        delete users[id];

        return res.json({message:"Login succesful"});
    }else{
        return res.json({message: "wrong otp"});
    }

    user.attempts += 1;

    if(user.attempts >= 3){
        user.blockedUntil = now + 10*60*1000;

        return res.json({message:" blocked for 10 minutes"});
    }
    
    return res.json({message: "wrong otp"})

});

module.exports = router;