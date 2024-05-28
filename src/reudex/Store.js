import {   configureStore}  from "@reduxjs/toolkit"
import Plants from "./slice"
import BasketPhSlice from "./BasketSlice"


export const store = configureStore({
    reducer: {
        [Plants.reducerPath]: Plants.reducer,
        [BasketPhSlice.reducerPath] : BasketPhSlice.reducer ,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Plants.middleware , BasketPhSlice.middleware),
    
})

