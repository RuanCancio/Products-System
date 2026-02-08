import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createRawMaterial } from "../store/RawMaterialsSlice.js"
import { useNavigate } from "react-router-dom"

const CreateRawMaterial = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error } = useSelector(state => state.rawMaterials)

    const [code, setCode] = useState("")
    const [name, setName] = useState("")
    const [stock, setStock] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
        
            await dispatch(
                createRawMaterial({
                    code,
                    name,
                    stock_quantity: Number(stock)
                })
            ).unwrap()
            alert("rawMaterial created successfully!")
        } catch (error) {
            alert("Error creating rawMaterial")
        }
    }

    return (
        <>
            <h1>Create New RawMaterial</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="code">Code:</label>
                <input type="text" id="code" value={code} onChange={(e) => setCode(e.target.value)} />

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="stock">Stock:</label>
                <input type="text" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} />


                <button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save RawMateral"}
                </button>
                <button type="button" onClick={() => navigate("/rawMaterials")}> Back </button>
            </form>
        </>
    )
}

export default CreateRawMaterial