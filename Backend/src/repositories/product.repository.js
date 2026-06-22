import db from "../database/db.js"

export const createProduct = async ({ name, price }) => {
    const [result] = await db.execute(
        "INSERT INTO product (name, price) VALUES (?, ?)",
        [name, price]
    )
    return result.insertId
}

export const findAllProducts = async () => {
    const [rows] = await db.query(
        "SELECT id, name, price FROM product"
    )
    return rows
}

export const updateProduct = async (id, { name, price }) => {
    const [result] = await db.execute(
        "UPDATE product SET name = ?, price = ? WHERE id = ?",
        [name, price, id]
    )
    if (result.affectedRows === 0) {
        throw new Error("Product not found")
    }
}

export const deleteProduct = async (id) => {
    await db.execute(
        "DELETE FROM product_raw_materials WHERE product_id = ?",
        [id]
    )
    const [result] = await db.execute(
        "DELETE FROM product WHERE id = ?",
        [id]
    )

    if (result.affectedRows === 0) {
        throw new Error("Product not found")
    }
}

export const findProductDetails = async () => {
    const [rows] = await db.query(
        `SELECT 
  p.id AS product_id,
  p.name AS product_name,
  p.price AS product_price, -- ajuste aqui
  rm.name AS raw_material_name,
  prm.quantity AS required_quantity,
  rm.stock_quantity
FROM product p
JOIN product_raw_materials prm ON prm.product_id = p.id
JOIN raw_materials rm ON rm.id = prm.raw_material_id`
    )
    return rows
}

export const findProducibleProducts = async () => {
    const [rows] = await db.query(`
        SELECT 
            p.id AS product_id,
            p.name AS product_name,
            p.price AS product_price,
            MIN(FLOOR(rm.stock_quantity / prm.quantity)) AS producible_quantity,
            MIN(FLOOR(rm.stock_quantity / prm.quantity)) * p.price AS total_value
        FROM product p
        JOIN product_raw_materials prm ON prm.product_id = p.id
        JOIN raw_materials rm ON rm.id = prm.raw_material_id
        GROUP BY p.id, p.name, p.price
        HAVING MIN(FLOOR(rm.stock_quantity / prm.quantity)) > 0
        ORDER BY total_value DESC
    `);
    return rows;
};
