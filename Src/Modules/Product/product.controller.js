import productModel from "../../../DB/Models/Product.model.js";
import { asyncHandler } from "../Utils/errorHandling.js";


//create a new product
export const createProduct = asyncHandler(async(req,res,next)=>{
    const { name , description , price , stock} = req.body;
    const checkName = await productModel.findOne({where : {name}});
    if(checkName) return next(new Error(`Product ${checkName.name} already exists`));
    const product = await productModel.create({ name , description , price , stock});
    return res.status(200).json({message : "Product created successfully" , product})
})

//update product
export const updateProduct = asyncHandler(async(req,res,next) => {
    const { id } = req.params;
    const { name , description , price , stock} = req.body;
    const product = await productModel.findByPk(id);
    if(!product) return next(new Error(`Product not found with id ${id}`));
    await product.update({ name , description , price , stock});
    return res.status(200).json({message : "Product updated successfully" , product})
})

//delete product
export const deleteProduct = asyncHandler(async(req,res,next) => {
    const { id } = req.params;
    const product = await productModel.findByPk(id);
    if(!product) return next(new Error(`Product not found with id ${id}`));
    await product.destroy();
    return res.status(200).json({message : "Product deleted successfully" , product})
})

// get all products
export const getAllProducts = asyncHandler(async(req,res,next)=>{
    const products = await productModel.findAll();
    return res.status(200).json({message : "All Products",products})
});

// get specific product by ID
export const getProduct = asyncHandler(async(req,res,next)=>{
    const { id } = req.params;
    const product = await productModel.findByPk(id);
    if(!product) return next(new Error(`Product not found with id ${id}`));
    return res.status(200).json({message : "Done", product})
});



