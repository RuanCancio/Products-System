import db from "../database/db.js"

export const createRawMaterial = async ({code, name, stock_quantity})=> {
    const [result] = await db.execute(
        "INSERT into raw_materials (code, name, stock_quantity) VALUES (?, ?, ?)",
        [code, name, stock_quantity]
    )
    return result.insertId
}

export const updateRawMaterial = async (id, {code, name, stock_quantity})=> {
    const [result] = await db.execute(
        "UPDATE raw_materials SET code = ?, name = ?, stock_quantity = ? WHERE id = ?",
        [code, name, stock_quantity, id]
    )
    if (result.affectedRows === 0) {
    throw new Error("RawMaterial not found")
  }
}

export const deleteRawMaterial = async (id)=> {
    const [result] = await db.execute(
        "DELETE FROM raw_materials WHERE id = ?",
        [id]
    )
    if (result.affectedRows === 0) {
    throw new Error("RawMaterial not found")
  }
}

export const findAllRawMaterials = async ()=> {
    const [rows] = await db.query(
        "SELECT id, code, name, stock_quantity FROM raw_materials"
    )
    return rows
}
