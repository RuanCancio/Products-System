import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api.js";

export const fetchRawMaterials = createAsyncThunk(
    "rawMaterials/fetch",
    async () => {
        const response = await api.get("/rawMaterials")
        return response.data
    }
)

export const createRawMaterial = createAsyncThunk(
    "rawMaterials/create",
    async (newRawMaterial) => {
        const response = await api.post("/rawMaterials", newRawMaterial)
        return {...newRawMaterial, id: response.data.id}
    }
)

export const updateRawMaterial = createAsyncThunk(
    "rawMaterials/update",
    async ({ id, data }) => {
        await api.put(`/rawMaterials/${id}`, data)
        return { id, ...data }
    }
)

export const deleteRawMaterial = createAsyncThunk(
    "rawMaterials/delete",
    async (id) => {
        await api.delete(`rawMaterials/${id}`)
        return id
    }
)

const RawMaterialsSlice = createSlice({
    name: "rawMaterials",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder

            //FETCH
            .addCase(fetchRawMaterials.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchRawMaterials.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchRawMaterials.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            //CREATE
            .addCase(createRawMaterial.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(createRawMaterial.fulfilled, (state, action) => {
                state.loading = false
                state.items.push(action.payload)
            })
            .addCase(createRawMaterial.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            //UPDATE
            .addCase(updateRawMaterial.pending, (state)=> {
                state.loading = true
                state.error = null
            })
            .addCase(updateRawMaterial.fulfilled, (state, action)=> {
                state.loading = false
                const index = state.items.findIndex(
                    (p)=> p.id === action.payload.id
                )
                if(index !== -1) {
                    state.items[index] = action.payload
                }
            })
            .addCase(updateRawMaterial.rejected, (state, action)=> {
                state.loading = false
                state.error = action.error.message  
            })

            //DELETE

            .addCase(deleteRawMaterial.fulfilled, (state, action)=> {
                state.items = state.items.filter(
                    rm => rm.id !== action.payload
                )
            })
    }
})

export default RawMaterialsSlice.reducer