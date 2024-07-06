import { Router } from "express";
import * as productController from "./product.controller.js";
import * as productSchema from "./product.schema.js";
import { validation } from "../../MiddleWares/validation.js";

const router = Router();


router.post("/" , validation(productSchema.createProduct) , productController.createProduct)
router.put("/:id" , validation(productSchema.updateProduct) , productController.updateProduct)
router.delete("/:id" , validation(productSchema.deleteProduct) , productController.deleteProduct)
router.get("/" , productController.getAllProducts)
router.get("/:id" , validation(productSchema.getProduct) ,productController.getProduct)

export default router
