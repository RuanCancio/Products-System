import db from "./db.js";


//Utilize para criar as tabelas uma unica vez no seu banco de dados

async function criarTabelas() {
  try {
    console.log("Iniciando a criação das tabelas...");

    await db.query(`
      CREATE TABLE IF NOT EXISTS product (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(10,2) NOT NULL
      )
    `);
    console.log("✅ Tabela 'product' verificada/criada com sucesso!");

    await db.query(`
      CREATE TABLE IF NOT EXISTS raw_materials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        code VARCHAR(50) NOT NULL,
        name VARCHAR(100) NOT NULL,
        stock_quantity INT NOT NULL
      )
    `);
    console.log("✅ Tabela 'raw_materials' verificada/criada com sucesso!");

    await db.query(`
      CREATE TABLE IF NOT EXISTS product_raw_materials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT NOT NULL,
        raw_material_id INT NOT NULL,
        quantity INT NOT NULL,
        FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
        FOREIGN KEY (raw_material_id) REFERENCES raw_materials(id) ON DELETE CASCADE
      )
    `);
    console.log("✅ Tabela 'product_raw_materials' verificada/criada com sucesso!");

    console.log("🎉 Todas as tabelas estão prontas na Aiven Cloud!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao criar as tabelas:", error);
    process.exit(1);
  }
}

criarTabelas();