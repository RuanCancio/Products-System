CREATE TABLE product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

CREATE TABLE raw_materials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(50) NOT NULL,
  name VARCHAR(100) NOT NULL,
  stock_quantity INT NOT NULL
);

CREATE TABLE product_raw_materials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  raw_material_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
  FOREIGN KEY (raw_material_id) REFERENCES raw_materials(id) ON DELETE CASCADE
);