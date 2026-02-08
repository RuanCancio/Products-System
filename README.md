📦 Product System
Sistema completo para gestão de produtos, matérias‑primas e cálculo automático de produtos producíveis, desenvolvido com Node.js + Express + MySQL no backend e React + Redux Toolkit (Vite) no frontend.

🚀 Funcionalidades
✅ Produtos
Criar produto

Listar produtos

Editar produto

Excluir produto

✅ Matérias‑Primas
Criar matéria‑prima

Listar matérias‑primas

Editar matéria‑prima

Excluir matéria‑prima

✅ Relação Produto × Matéria‑Prima
Cadastrar quais matérias‑primas um produto utiliza

Definir quantidade necessária de cada matéria‑prima

✅ Produtos Producíveis
Cálculo automático da quantidade máxima que pode ser produzida

Baseado no estoque disponível das matérias‑primas

Ordenado pelo maior valor total possível de produção

🧠 Regra de Negócio (Producible)
Um produto só é considerado producível quando:

Possui matérias‑primas vinculadas

Todas as matérias‑primas possuem estoque suficiente

Cálculo:

producible_quantity = MIN(stock_quantity / required_quantity)
total_value = producible_quantity * product_price
🛠️ Tecnologias Utilizadas
Backend
Node.js

Express

MySQL

Cors

MVC (Controller, Service, Repository)

Jest (testes)

Frontend
React

Vite

Redux Toolkit

React Router DOM

Axios

📂 Estrutura do Projeto
products-system/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── repositories/
│   ├── database/
│   ├── tests/
│   ├── app.js
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── store/
    │   ├── api/
    │   └── main.jsx
    └── vite.config.js
⚙️ Como Rodar o Projeto
🔹 Backend
cd backend
npm install
npm run dev
Servidor disponível em:

http://localhost:3000
🔹 Frontend
cd frontend
npm install
npm run dev
Frontend disponível em:

http://localhost:5173
🔗 Rotas da API
Produtos
GET /products

POST /products

PUT /products/:id

DELETE /products/:id

GET /products/details

GET /products/producible

Matérias‑Primas
GET /rawMaterials

POST /rawMaterials

PUT /rawMaterials/:id

DELETE /rawMaterials/:id

Relação Produto × Matéria‑Prima
POST /productRawMaterial

GET /productRawMaterial

🧪 Testes
Os testes cobrem:

CRUD de produtos

CRUD de matérias‑primas

Relacionamentos

npm test
📌 Observações Importantes
A relação produto × matéria‑prima não é automática

O cálculo de producible acontece automaticamente no backend

Redux Toolkit centraliza todo o estado da aplicação

Frontend desacoplado do backend via Axios

👨‍💻 Autor
Projeto desenvolvido por Ruan Cancio


