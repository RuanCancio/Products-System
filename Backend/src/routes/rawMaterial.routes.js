import { Router } from "express";
import * as rawMaterialcontroller from "../controllers/rawMaterial.controller.js"

const router = Router()

router.post("/", rawMaterialcontroller.create)
router.get("/", rawMaterialcontroller.findAll)
router.put("/:id", rawMaterialcontroller.updateRawMaterial)
router.delete("/:id", rawMaterialcontroller.deleteRawMaterial)

export default router