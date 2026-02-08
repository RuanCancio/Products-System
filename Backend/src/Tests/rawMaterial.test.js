import request from "supertest"
import app from "../app.js"

describe("RawMaterials API", () => {
    let productId
    it("POST /rawMaterials should create rawMaterial", async () => {
        const res = await request(app)
            .post("/rawMaterials")
            .send({ code: "RM998", name: "TestMaterial", stock_quantity: 10 })
        expect(res.statusCode).toBe(201)
        productId = res.body.id
    })
    it("GET /rawMaterials should return list", async () => {
        const res = await request(app).get("/rawMaterials")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })
    it("PUT /rawMaterials/:id should update rawMaterial", async () => {
        const res = await request(app)
            .put(`/rawMaterials/${productId}`)
            .send({ code: "RM990", name: "product Teste", stock_quantity: 50 })

        expect(res.statusCode).toBe(204)
    })
    it("DELETE /rawMaterials/:id should delete rawMaterial", async () => {
        const res = await request(app)
            .delete(`/rawMaterials/${productId}`)
        expect(res.statusCode).toBe(204)
    })
})