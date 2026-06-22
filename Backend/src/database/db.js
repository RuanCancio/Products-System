import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

async function testConnection() {
  try {
    const connection = await db.getConnection()
    console.log("✅ Conexão com o banco de dados (Aiven) estabelecida com sucesso!")
    connection.release()
  }
  catch(error) {
    console.error("❌ Erro ao conectar com o banco de dados:" + error.message)
  }
}

testConnection()

export default db