import { createSlice } from '@reduxjs/toolkit'

export const data = createSlice({
    name: 'data',
    initialState: {
        products: [],
        categories: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setProducts, setCategories  } = data.actions

export default data.reducer