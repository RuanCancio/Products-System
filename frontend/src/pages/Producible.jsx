import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducible } from "../store/producibleSlice"
import { useNavigate } from "react-router-dom";

export default function Producible() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { items, loading } = useSelector(state => state.producible)

    useEffect(() => {
        dispatch(fetchProducible())
    }, [dispatch])

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Producible Products</h2>
            <button onClick={() => navigate("/productRawMaterial/new")}>
                Bind Producible
            </button>
            <button onClick={() => dispatch(fetchProducible())}>
                Update List
            </button>
            <table border="1">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Value</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(p => (
                        <tr key={p.product_id}>
                            <td>{p.product_name}</td>
                            <td>{p.product_price}</td>
                            <td>{p.producible_quantity}</td>
                            <td>{p.total_value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}