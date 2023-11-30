import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import login from './login'

export const store = configureStore({
    reducer: {
        cart : cartSlice,
        login : login
    },
})