import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRawMaterials, deleteRawMaterial } from "../store/RawMaterialsSlice.js"
import { useNavigate } from "react-router-dom";

export default function RawMaterials() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { items, loading, error } = useSelector(state => state.rawMaterials)

    useEffect(() => {
        dispatch(fetchRawMaterials())
    }, [dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    const handleDelete = async (id) => {
        if (confirm("Are you sure about that?")) {
            try {
                await dispatch(deleteRawMaterial(id)).unwrap()
            } catch (err) {
                alert("Error")
            }
        }

    }

    return (
        <div>
            <h1>RawMaterials</h1>
            <button onClick={() => navigate("/rawMaterials/new")}>+ New RawMaterial</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Stock Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(rawMaterials => (
                        <tr key={rawMaterials.id}>
                            <td>{rawMaterials.id}</td>
                            <td>{rawMaterials.code}</td>
                            <td>{rawMaterials.name}</td>
                            <td>{rawMaterials.stock_quantity}</td>
                            <td><button onClick={() => navigate(`/rawMaterials/edit/${rawMaterials.id}`)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(rawMaterials.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}