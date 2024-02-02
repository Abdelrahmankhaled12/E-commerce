import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import data from './data'

export const store = configureStore({
    reducer: {
        cart : cartSlice,
        data : data,
    },
})