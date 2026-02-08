import * as productRawMaterialRepository from "../repositories/product_raw_material.repository.js"

export const create = async (productRawMaterial)=> {
    const {product_id, raw_material_id, quantity  } = productRawMaterial
    if(!product_id || !raw_material_id || quantity == null) {
        throw new Error("product_id, raw_material_id and quantity are required")
    }
    return await productRawMaterialRepository.createProductRawMaterial(productRawMaterial)
}

export const findAll = async()=> {
    return await productRawMaterialRepository.findAllProductRawMaterial()
}