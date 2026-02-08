import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api.js";

export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async () => {
        const response = await api.get("/products")
        return response.data
    }
)

export const createProduct = createAsyncThunk(
    "products/create",
    async (newProduct) => {
        const response = await api.post("/products", newProduct)
        return { ...newProduct, id: response.data.id }
    }
)

export const updateProduct = createAsyncThunk(
    "products/update",
    async ({ id, data }) => {
        await api.put(`/products/${id}`, data)
        return { id, ...data }
    }
)

export const deleteProduct = createAsyncThunk(
    "products/delete",
    async (id) => {
        await api.delete(`/products/${id}`)
        return id
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder

            // FETCH
            .addCase(fetchProducts.pending, (state) => {
                state.error = null
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            // CREATE
            .addCase(createProduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false
                state.items.push(action.payload)
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            // UPDATE
            .addCase(updateProduct.pending, (state) => {
                state.error = null
                state.loading = true
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false
                const index = state.items.findIndex(
                    (p) => p.id === action.payload.id
                )
                if (index !== -1) {
                    state.items[index] = action.payload
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            // DELETE
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (p) => p.id !== action.payload
                )
            })
    }
})

export default productsSlice.reducer