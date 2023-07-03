const express = require("express");
const connectDb = require("./config/dbConnection");
const dotnet = require("dotenv").config();
connectDb(); 
var cors = require('cors');

const app =express();
const port = process.env.PORT || 5000;
app.use(express.json());

// use it before all route definitions
app.use(cors({origin: 'http://localhost/'}));

app.use("/api/products",require("./routes/productRoutes"));  

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});  