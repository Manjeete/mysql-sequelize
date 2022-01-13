const express = require("express");
const app = express();

const PORT = 8080;
require("./models");

app.get("/",(req,res) =>{
    res.send("Working...")
})

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})