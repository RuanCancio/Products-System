import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../store/productsSlice.js"
import { useNavigate } from "react-router-dom";

export default function Products() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { items, loading, error } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete it?")) {
            dispatch(deleteProduct(id))
        }
    }


    return (
        <div>
            <h1>Products</h1>
            <button onClick={() => navigate("/products/new")}>+ New Product</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => navigate(`/products/edit/${product.id}`)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(product.id)}>Delete</button></td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}