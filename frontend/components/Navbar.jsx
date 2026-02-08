import { Link } from "react-router-dom"
import Styles from "../Css/Navbar.module.css"

const Navbar = ()=> {
    return (
        <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/rawMaterials">Raw Materials</Link></li>
                    <li><Link to="/producible">KPIs</Link></li>
                </ul>
            </nav>
    )
}

export default Navbar