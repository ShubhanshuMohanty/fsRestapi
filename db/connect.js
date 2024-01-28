const mongoose=require('mongoose');

const uri="mongodb+srv://chungchotu:1234abcd@cluster0.bf5yc6e.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB=()=>{
    console.log("mongodb connected");
    return mongoose.connect(uri,{
        //useNewUrlParser:true,
        //useUnifiedTopology: true
    })
}

module.exports=connectDB;