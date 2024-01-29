const Product=require('../models/product.js')

const getAllProducts=async(req,res)=>{

    const {company,name,featured}=req.query;
    const queryObject={};

    if (company) {
        queryObject.company=company;
    }

    if (featured) {
        queryObject.featured=featured;
    }

    if (name) {
        //add mongodb regex also
        queryObject.name={$regex: name, $options:"i"};
    }

    console.log(queryObject);

    const myData=await Product.find(queryObject);
    res.status(200).json({myData});
}

const getAllProductsTesting=async(req,res)=>{
    const myData=await Product.find(req.query);
    //?company=mi iske liye req.query
    //http://localhost:5000/api/products/testing?company=mi
    //for many field      ?company=apple&name=iphone
    //http://localhost:5000/api/products/testing?company=apple&name=iphone
    res.status(200).json({myData});
}

module.exports={getAllProducts,getAllProductsTesting}