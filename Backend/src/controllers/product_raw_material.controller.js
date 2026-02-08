import * as productRawMaterialService from "../services/product_raw_material.service.js"

export const create = async (req, res) => {
    try {
        const id = await productRawMaterialService.create(req.body)
        res.status(201).json({ id })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
export const findAll = async (req, res) => {
    try {
        const productRawMaterials = await productRawMaterialService.findAll()
        res.json(productRawMaterials)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}