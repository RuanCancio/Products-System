import { Router } from "express";
import * as productRawMaterialRouter from "../controllers/product_raw_material.controller.js"

const router = Router()

router.post("/", productRawMaterialRouter.create)
router.get("/", productRawMaterialRouter.findAll)

export default router