import {Router} from "express"
import * as productController from "../controllers/product.controller.js"

const router = Router()

router.post("/", productController.create)
router.get("/", productController.findAll)
router.get("/details", productController.findDetails)

router.get("/producible", productController.findProducible)

router.put("/:id", productController.updateProduct)

router.delete("/:id", productController.deleteProduct)

export default router