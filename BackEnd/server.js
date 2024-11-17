const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

;( async () =>{
    const DB_Name = "Data_Of_Cookies";
    const { connection } = await mongoose.connect(`mongodb+srv://anonto:2005@cluster0.1zoujuq.mongodb.net/${DB_Name}`)
    console.log("Your database is configured on : ", connection.host );
})();

app.use(cors(
    {
        origin:"*"
    }
))

app.get("/data", (req, res) => {
    res.json({data:"Your Server is running"})
})


app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000")
})