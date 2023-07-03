const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
//@desc Get all products for admin
//@route Get /api/products
//@access private
const getProducts = asyncHandler (async (req,res,next)=>{

    const products =await Product.find();
    if(products!=""){
        res.status(200).json({data:products,message:"success",status:"success"});
        res.end();
    }    
    else{
      res.status(500).json({message:"Something went wrong please try again after sometime...."});  
      res.end();
    }
    
});

//@desc Create new product
//@route POST /api/products
//@access private
const createProduct = asyncHandler (async (req,res)=>{

    const {Title,Year,imdbID,Type,Poster,Price}=req.body;
    if(!Title || !Year || !imdbID || !Type || !Poster || !Price){
        res.status(400).json({message:"All fields are mandetory",status:"error"});
    }
    const product = await Product.create({
        Title,
        Year,
        imdbID,
        Type,
        Poster,
        Price
    });

    res.status(200).json({data:product,message:"success",status:"success"});
    res.end();
});
module.exports = {
    getProducts,
    createProduct
};