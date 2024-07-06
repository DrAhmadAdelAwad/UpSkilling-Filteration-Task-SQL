import joi from 'joi';

// Create a new Order
export const createOrder = joi.object({
    customerId: joi.number().integer().min(1).required(),
    totalAmount: joi.number().integer().min(0).required(),
    productId: joi.number().integer().min(1).required(),
}).required();


// Update order
export const updateOrder = joi.object({
    id : joi.number().integer().min(1).required(),
    customerId: joi.number().integer().min(1),
    totalAmount: joi.number().min(0),
}).required();

// Delete order
export const deleteOrder = joi.object({
    id : joi.number().integer().min(1).required(),
}).required();

//getOrder
export const getOrder = joi.object({
    id : joi.number().integer().min(1).required(),
}).required();