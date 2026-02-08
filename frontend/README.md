# 🏭 Inventory & Production Control System

Este projeto foi desenvolvido como **teste prático** e tem como objetivo controlar o estoque de matérias-primas, os produtos fabricados e calcular quais produtos podem ser produzidos com base no estoque disponível, priorizando os produtos de maior valor.

---

## 📌 Funcionalidades

### Backend (API REST)
- CRUD de **Produtos**
- CRUD de **Matérias-primas**
- Associação entre **Produtos x Matérias-primas**
- Cálculo dos **produtos que podem ser produzidos** com o estoque atual
- Prioridade de produção baseada no **maior valor total**
- Persistência de dados em banco relacional

### Frontend (Web)
- Interface para cadastro de produtos
- Interface para cadastro de matérias-primas
- Associação de matérias-primas aos produtos
- Listagem dos produtos que podem ser produzidos
- Aplicação responsiva
- Gerenciamento de estado com **Redux Toolkit**

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- MySQL
- SQL
- Arquitetura em camadas (Controller, Service, Repository)

### Frontend
- React
- Redux Toolkit
- Axios
- Vite

---

## 🧠 Regra de Negócio (RF004)

O sistema calcula automaticamente:
- Quantidade máxima de cada produto que pode ser produzido
- Considera a matéria-prima limitante
- Prioriza produtos com **maior valor total**
- Retorna o valor total estimado da produção

---

## 📂 Estrutura do Projeto

### Backend