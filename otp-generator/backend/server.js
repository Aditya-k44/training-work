const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);

app.listen(8000, () =>{
    console.log("Server running on port 8000");
});