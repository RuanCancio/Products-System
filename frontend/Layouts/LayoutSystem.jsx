import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"

const LayoutSystem = () => {
    return (
        <div>
            <header style={{ padding: "1rem", background: "#1e293b", color: "#fff" }}>
                <h2>Products System</h2>
            </header>

            <Navbar />
            
            <main style={{ padding: "1rem" }}>
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutSystem