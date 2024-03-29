const express=require('express');
const app=express();
require('dotenv').config();

const products_routes=require('./routes/products.js')
const connectDB=require('./db/connect.js')

const PORT=process.env.PORT||5000;

app.get("/",(req,res)=>{
    res.send("sm");
});

//midleware or to setrouter
app.use("/api/products",products_routes)

const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(PORT,"connected");
        })
    } catch (error) {
        console.log(error);
    }
}

start();