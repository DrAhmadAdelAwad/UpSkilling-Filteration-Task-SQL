import orderModel from "../../../DB/Models/Order.model.js";
import { asyncHandler } from "../Utils/errorHandling.js";

export const createOrder = asyncHandler(async(req,res,next)=>{
    //OrderId, CustomerId, OrderDate, TotalAmount
    const {customerId , totalAmount , productId} = req.body
    const order = await orderModel.create({ customerId , totalAmount , productId});
    return res.status(200).json({message : "Order created successfully" , order})

})

//updateOrder
export const updateOrder = asyncHandler(async(req,res,next)=>{
    const {id } = req.params
    const order = await orderModel.findByPk(id)
    if(!order) return res.status(404).json({message : "Order not found"})
       await order.update(req.body) 
    return res.status(200).json({message : "Order updated successfully" , order})
})

//deleteOrder
export const deleteOrder = asyncHandler(async(req,res,next)=>{
    const {id } = req.params
    const order = await orderModel.findByPk(id)
    if(!order) return res.status(404).json({message : "Order not found"})
    await order.destroy()
    return res.status(200).json({message : "Order deleted successfully" , order})
})

//getAllOrders
export const getAllOrders = asyncHandler(async(req,res,next)=>{
    const orders = await orderModel.findAll()
    return res.status(200).json({message : "All orders" , orders})
})

//get specific order by ID

export const getOrder = asyncHandler(async(req,res,next)=>{
    const { id } = req.params
    const order = await orderModel.findByPk(id)
    if(!order) return res.status(404).json({message : "Order not found"})
    return res.status(200).json({message : "Done", order})
})
