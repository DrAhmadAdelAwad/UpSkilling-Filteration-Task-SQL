import { connectDB } from "../DB/connection.js";
import productRouter from "./Modules/Product/product.router.js";
import orderRouter from "./Modules/Order/order.router.js"
import { globalErrorHandling } from "./Modules/Utils/errorHandling.js";
 
 
 const bootstrap =  (app,express)=> {
app.use(express.json());
connectDB();
app.use("/product" , productRouter);
app.use("/order" , orderRouter);
app.use("*" , (req,res,next)=>{
    return res.status(404).json({message : "InValid Routing"})
})
app.use(globalErrorHandling);

 }



 export default bootstrap;