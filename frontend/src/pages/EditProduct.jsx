import {useParams, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {useState, useEffect } from "react"
import { updateProduct } from "../store/productsSlice.js"

const EditProduct = ()=> {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const product = useSelector(state=> state.products.items.find(p=> p.id === Number(id)))

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    useEffect(()=> {
        if(product) {
            setName(product.name)
            setPrice(product.price)
        }
    }, [product])

    const handleSubmit = async (e)=> {
        e.preventDefault()

        await dispatch(
            updateProduct({
                id: Number(id),
                data: {name, price}
            })
        ).unwrap
        navigate("/products")
    }

    if(!product) return <p style={{color:"red"}}>Produto não encontrado</p>

    return (
        <div>
            <h1>Edit Product</h1>

            <form onSubmit={handleSubmit}>
            <input 
            value={name}
            onChange={e=> setName(e.target.value)}
            placeholder="Name"
            />
            <input 
            value={price}
            onChange={e=> setPrice(e.target.value)}
            placeholder="Price"
            />

            <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditProduct