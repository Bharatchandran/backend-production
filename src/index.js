// require('dotenv'),config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERRR:", error);
        throw error

    })
    app.listen(process.env.port || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
} )
.catch((error) => {
    console.log("MongoDB connection failled!!", error);
})









/*
import express from 'express'
const app = express();

// ifis
;( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRR:", error);
            throw error

        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error: ", error);
        throw err
    }
})()
*/