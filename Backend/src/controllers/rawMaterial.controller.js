import * as rawMaterialService from "../services/rawMaterial.service.js"

export const create = async (req, res) => {
    try {
        const id = await rawMaterialService.create(req.body)
        res.status(201).json({ id })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const updateRawMaterial = async (req, res)=> {
    try {
        const { id } = req.params
        await rawMaterialService.updateRawMaterial(id, req.body)
        res.sendStatus(204)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteRawMaterial = async (req, res)=> {
    try {
        const { id } = req.params
        await rawMaterialService.deleteRawMaterial(id)
        res.sendStatus(204)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const findAll = async (req, res) => {
    try {
        const rawMaterials = await rawMaterialService.findAll()
        res.json(rawMaterials)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}