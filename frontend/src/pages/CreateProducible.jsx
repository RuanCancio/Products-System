import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import api from "../api/api.js"
import { fetchProducts } from "../store/productsSlice.js"
import { fetchRawMaterials } from "../store/RawMaterialsSlice.js"

const CreateProducible = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { items: products } = useSelector(state => state.products)
  const { items: rawMaterials } = useSelector(state => state.rawMaterials)

  const [productId, setProductId] = useState("")
  const [rawMaterialId, setRawMaterialId] = useState("")
  const [quantity, setQuantity] = useState("")

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchRawMaterials())
  }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await api.post("/productRawMaterial", {
      product_id: Number(productId),
      raw_material_id: Number(rawMaterialId),
      quantity: Number(quantity)
    })

    navigate("/products")
  }

  return (
    <div>
      <h1>Vincular Produto x Matéria‑Prima</h1>

      <form onSubmit={handleSubmit}>
        <select
          value={productId}
          onChange={e => setProductId(e.target.value)}
          required
        >
          <option value="">Selecione um produto</option>
          {products.map(p => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <select
          value={rawMaterialId}
          onChange={e => setRawMaterialId(e.target.value)}
          required
        >
          <option value="">Selecione a matéria‑prima</option>
          {rawMaterials.map(rm => (
            <option key={rm.id} value={rm.id}>
              {rm.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Quantidade necessária"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          required
        />

        <button type="submit">Salvar relação</button>
      </form>
    </div>
  )
}

export default CreateProducible