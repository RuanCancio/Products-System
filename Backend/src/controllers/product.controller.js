import * as productService from "../services/product.service.js"

export const create = async (req, res) => {
    try {
        const id = await productService.create(req.body)
        res.status(201).json({ id })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const findAll = async (req, res) => {
    try {
        const products = await productService.findAll()
        res.json(products)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const findDetails = async (req, res)=> {
    try {
        const data = await productService.findDetails()
        res.json(data)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

export const findProducible = async (req, res)=> {
    try {
        const producibleProducts = await productService.findProducible()
        res.json(producibleProducts)
    }   catch(err) {
        res.status(500).json({ error: err.message})
    }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    await productService.updateProduct(id, req.body)
    res.sendStatus(204)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    await productService.deleteProduct(id)
    res.sendStatus(204)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
