// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import {app} from './app.js';
import connectDB from './db/index.js';

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    })      
})
.catch((err) => {
    console.log("Mongo DB connect failed !!! ", err);
})



















/*
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw(error)
        })

        const port = process.env.PORT || 3000
        app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        })  

    } catch (error) {
        throw(error)
    }
})()

*/