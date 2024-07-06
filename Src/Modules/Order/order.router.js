import { Router } from "express";
import * as orderController from "./order.controller.js"
import * as orderSchema from "./order.schema.js"
import { validation } from "../../MiddleWares/validation.js";
const router = Router();

router.post("/" , validation(orderSchema.createOrder) , orderController.createOrder)
router.put("/:id" , validation(orderSchema.updateOrder) , orderController.updateOrder)
router.delete("/:id" , validation(orderSchema.deleteOrder) , orderController.deleteOrder)
router.get("/", orderController.getAllOrders)
router.get("/:id", orderController.getOrder)


export default router
