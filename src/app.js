import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser"; // allowing server to access and set browser cookie of user  (CRUD for cookie)
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public")) // to store assets like file image etc. To store such file in the server
app.use(cookieParser())


export {app}