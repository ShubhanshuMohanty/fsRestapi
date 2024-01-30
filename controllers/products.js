const Product=require('../models/product.js')

const getAllProducts=async(req,res)=>{

    const {company,name,featured,sort,select}=req.query;
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

    let apiData=Product.find(queryObject);
    
    if (sort) {
        let sortFix=sort.replace(',',' ');
        // queryObject.sort=sortFix;
        apiData=apiData.sort(sortFix)
    }

    if (select) {
        //let selectFix=select.replace(',',' ');
        //console.log(selectFix);
        let selectFix=select.split(',').join(" ");
        apiData=apiData.select(selectFix)
        
    }

    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 10;

    let skip=(page-1)*limit;

    apiData=apiData.skip(skip).limit(limit);

    // console.log(queryObject);

    const myData=await apiData;
    res.status(200).json({myData,nbHits: myData.length});
}

const getAllProductsTesting=async(req,res)=>{
    console.log(req.query);
    const myData=await Product.find(req.query).select("name");
    //?company=mi iske liye req.query
    //http://localhost:5000/api/products/testing?company=mi
    //for many field      ?company=apple&name=iphone
    //http://localhost:5000/api/products/testing?company=apple&name=iphone
    res.status(200).json({myData});
}

module.exports={getAllProducts,getAllProductsTesting}