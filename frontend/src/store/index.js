import { configureStore } from "@reduxjs/toolkit"
import producibleReducer from "./producibleSlice.js"
import productsReducer from "./productsSlice.js"
import rawMaterialsReducer from "./RawMaterialsSlice.js"
import dashboardReducer from "./dashboardSlice.js"

export const store = configureStore({
    reducer: {
        producible: producibleReducer,
        products: productsReducer,
        rawMaterials: rawMaterialsReducer,
        dashboard: dashboardReducer
    }
})