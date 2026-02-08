import db from "../database/db.js";

export const createProductRawMaterial = async({product_id, raw_material_id, quantity})=> {
    const [result] = await db.execute(
        "INSERT INTO product_raw_materials (product_id, raw_material_id, quantity) VALUES (?, ?, ?)",
        [product_id, raw_material_id, quantity]
    )
    return result.insertId
}

export const findAllProductRawMaterial = async()=> {
    const [rows] = await db.query(
        "SELECT id, product_id, raw_material_id, quantity FROM product_raw_materials"
    )
    return rows
}