import request from "supertest";
import app from "../app.js";

describe("Products API", () => {
  let productId

  it("POST /products should create product", async ()=> {
    const res = await request(app)
    .post("/products")
    .send({name: "Test Product", price: 10})

    expect(res.statusCode).toBe(201)
    productId = res.body.id
  })

  it("GET /products should return list", async () => {
    const res = await request(app).get("/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  })

  it("PUT /products/:id should update product", async () => {
    const res = await request(app)
    .put(`/products/${productId}`)
    .send({name: "Updated", price: 99})

    expect(res.statusCode).toBe(204)
  })
  
  it("DELETE /products/:id should delete product", async ()=> {
    const res = await request(app)
    .delete(`/products/${productId}`)
    expect(res.statusCode).toBe(204)
  })
})

