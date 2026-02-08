import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { updateRawMaterial } from "../store/RawMaterialsSlice.js"

const EditRawMaterial = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const rawMaterial = useSelector(state =>
    state.rawMaterials.items.find(rm => rm.id === Number(id))
  )

  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [stockQuantity, setStockQuantity] = useState("")

  useEffect(() => {
    if (rawMaterial) {
      setCode(rawMaterial.code)
      setName(rawMaterial.name)
      setStockQuantity(rawMaterial.stock_quantity)
    }
  }, [rawMaterial])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await dispatch(
      updateRawMaterial({
        id,
        data: {
          code,
          name,
          stock_quantity: Number(stockQuantity)
        }
      })
    )

    navigate("/rawMaterials")
  }

  if (!rawMaterial) {
    return <p style={{ color: "red" }}>Raw material não encontrada</p>
  }

  return (
    <div>
      <h1>Edit Raw Material</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Code"
        />

        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          type="number"
          value={stockQuantity}
          onChange={e => setStockQuantity(e.target.value)}
          placeholder="Stock quantity"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default EditRawMaterial