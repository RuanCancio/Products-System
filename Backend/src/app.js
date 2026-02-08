import express from "express"
import cors from "cors"
import productRoutes from "./routes/product.routes.js"
import rawMaterials from "./routes/rawMaterial.routes.js"
import productRawMaterial from "./routes/product_raw_material.routes.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/products", productRoutes)
app.use("/rawMaterials", rawMaterials)
app.use("/productRawMaterial", productRawMaterial)

export default app