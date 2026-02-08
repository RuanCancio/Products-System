import * as rawMaterialRepository from "../repositories/rawMaterial.repository.js"

export const create  = async (rawMaterial)=> {
    if(!rawMaterial.code ||!rawMaterial.name || rawMaterial.stock_quantity == null) {
        throw new Error("Code, name and stock_quantity are required")
    }
    return await rawMaterialRepository.createRawMaterial(rawMaterial)
}

export const updateRawMaterial = async (id, data)=> {
    return await rawMaterialRepository.updateRawMaterial(id, data)
}

export const deleteRawMaterial = async (id)=> {
    return await rawMaterialRepository.deleteRawMaterial(id)
}

export const findAll = async ()=> {
    return await rawMaterialRepository.findAllRawMaterials()
}