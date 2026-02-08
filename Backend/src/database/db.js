import mysql from "mysql2/promise"

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"r80366452@",
    database: "inventory_system",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default db