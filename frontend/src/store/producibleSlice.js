import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api/api.js"

export const fetchProducible = createAsyncThunk(
    "producible/fetch",
    async ()=> {
        const response = await api.get("/products/producible")
        return response.data
    }
)

const producibleSlice = createSlice({
    name:"producible",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducible.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchProducible.fulfilled, (state, action)=> {
            state.loading = false
            state.items = action.payload
        })
        .addCase(fetchProducible.rejected, (state, action)=> {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default producibleSlice.reducer