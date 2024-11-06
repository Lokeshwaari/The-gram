//const express = require ("express")
import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/auth.route.js"
import connectDB from "./db/connectDB.js"
import cookieParser from "cookie-parser"


dotenv.config();
const app = express();
const PORT = process.env.PORT;




app.get("/" , (req, res) => {
    res.send("Hello World!!");
})

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth" , authRoute);
app.listen(PORT ,()=> {
console.log(`Server is running on ${PORT}`)
connectDB();
})