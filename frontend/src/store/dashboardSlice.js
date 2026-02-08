import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api.js";

export const fetchDashboard = createAsyncThunk(
    "dashboard/fetch",
    async()=> {
        const response = await api.get("/products/producible")
        return response.data
    }
)

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        data: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDashboard.pending, (state)=> {
            state.loading = true
        })
        .addCase(fetchDashboard.fulfilled, (state, action)=> {
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchDashboard.rejected, (state)=> {
            state.loading = false
        })
    }
})

export default dashboardSlice.reducer