import request from "supertest";
import app from "../app.js"

describe("Producible API", () => {
    it("GET /products/producibles should return list", async () => {
        const res = await request(app).get("/products/producible")
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

})