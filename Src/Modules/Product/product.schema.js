import joi from "joi"


// create a new product
export const createProduct = joi.object({
    name : joi.string().max(50).required(),
    description : joi.string().min(10).max(250).required(),
    price : joi.number().min(0).positive().required(),
    stock : joi.number().min(0).positive().required(),

}).required()

// update a product
export const updateProduct = joi.object({
    name : joi.string().max(50).required(),
    description : joi.string().min(10).max(250),
    price : joi.number().min(0).positive(),
    stock : joi.number().min(0).positive(),
    id : joi.number().min(1).positive().required(),
}).required()

// delete a product
export const deleteProduct = joi.object({
    id : joi.number().min(1).positive().required(),
}).required()

// get a product by id
export const getProduct = joi.object({
    id : joi.number().min(1).positive().required(),
}).required();