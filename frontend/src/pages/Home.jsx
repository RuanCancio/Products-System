import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDashboard } from "../store/dashboardSlice.js"

export default function Home() {
    const dispatch = useDispatch()
    const { data, loading } = useSelector(state => state.dashboard)

    useEffect(() => {
        dispatch(fetchDashboard())
    }, [dispatch])

    if (loading) return <p>Loading dashboard...</p>

    const totalUnits = data.reduce(
        (sum, item) => sum + item.producible_quantity,
        0
    )

    const totalValue = data.reduce(
        (sum, item) => sum + Number(item.total_value),
        0
    )

    return (
        <div>
            <h1>Dashboard</h1>

            <div style={{ display: "flex", gap: "1rem" }}>
                <div style={cardStyle}>
                    <h3>Products</h3>
                    <p>{data.length}</p>
                </div>

                <div style={cardStyle}>
                    <h3>Producible Units</h3>
                    <p>{totalUnits}</p>
                </div>

                <div style={cardStyle}>
                    <h3>Total Value</h3>
                    <p>R$ {totalValue.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}


const cardStyle = {
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    minWidth: "150px",
    textAlign: "center"
}
