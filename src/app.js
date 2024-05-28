import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser"; // allowing server to access and set browser cookie of user  (CRUD for cookie)
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) // to configure json 
app.use(express.urlencoded({extended:true, limit:"16kb"})) // to recieve data from url // extended for object inside object
app.use(express.static("public")) // to store assets like file image etc. To store such file in the server
app.use(cookieParser()) //accessing cookies of browser by server

// routes import

import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)


// Middleware
// checking between url and the (req, res)
// (err, req, res, next) next is a flag in middleware
export {app}