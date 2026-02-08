import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createProduct } from "../store/productsSlice.js"
import { useNavigate } from "react-router-dom"

const CreateProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error } = useSelector(state => state.products)

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await dispatch(
                createProduct({
                    name,
                    price: Number(price)
                })
            ).unwrap()
            alert("Product created successfully!")
        } catch (error) {
            alert("Error creating product")
        }


    }

    return (
        <>
            <h1>Create New Product</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="value">Value:</label>
                <input type="text" id="value" value={price} onChange={(e) => setPrice(e.target.value)} />

                <button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save Product"}
                </button>
                <button type="button" onClick={()=>  navigate("/products")}> Back </button>
            </form>
        </>
    )
}

export default CreateProduct