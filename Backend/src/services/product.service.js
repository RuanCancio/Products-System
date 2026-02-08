import * as productRepository from "../repositories/product.repository.js"

export const create = async (product) => {
    if(!product.name || !product.price) {
        throw new Error("Name and price are required")
    }
    return await productRepository.createProduct(product)
}

export const updateProduct = async (id, data)=> {
    return await productRepository.updateProduct(id, data)
}

export const deleteProduct = async (id)=> {
    return await productRepository.deleteProduct(id)
}

export const findAll = async ()=> {
    return await productRepository.findAllProducts()
}

export const findDetails = async ()=> {
    return await productRepository.findProductDetails()
}

export const findProducible = async ()=> {
    return await productRepository.findProducibleProducts()
}