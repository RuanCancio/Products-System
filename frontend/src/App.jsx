import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Producible from "./pages/Producible.jsx"
import Products from "./pages/Products.jsx"
import RawMaterials from "./pages/RawMaterials.jsx"
import LayoutSystem from "../Layouts/LayoutSystem.jsx"
import Home from "./pages/Home.jsx"
import CreateProduct from "./pages/CreateProduct.jsx"
import CreateRawMaterial from "./pages/CreateRawMaterial.jsx"
import EditProduct from "./pages/EditProduct.jsx"
import EditRawMaterial from "./pages/EditRawMaterial.jsx"
import CreateProducible from "./pages/CreateProducible.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutSystem />}>

          <Route path="home" element={<Home />} />

          <Route path="products/new" element={<CreateProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="products" element={<Products />} />

          <Route path="/productRawMaterial/new" element={<CreateProducible />} />

          <Route path="producible" element={<Producible />} />

          <Route path="rawMaterials/new" element={<CreateRawMaterial />} />
          <Route path="rawMaterials/edit/:id" element={<EditRawMaterial />} />
          <Route path="rawMaterials" element={<RawMaterials />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
