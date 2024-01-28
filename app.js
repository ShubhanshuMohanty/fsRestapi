const express=require('express');
const app=express();

const PORT=process.env.PORT||5000;

app.get("/",(req,res)=>{
    res.send("sm");
});

const start=async()=>{
    try {
        app.listen(PORT,()=>{
            console.log(PORT,"connected");
        })
    } catch (error) {
        console.log(error);
    }
}

start();