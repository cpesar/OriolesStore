import { createSlice } from '@reduxjs/toolkit';
// import { apiSlice } from './apiSlice.js';
// import { ORDERS_URL } from '../constants.js'
import { updateCart } from '../utils/cartUtils.jsx';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] }
// console.log(initialState)

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            console.log(item)

            const hasItem = state.cartItems.find((h) => h._id === item._id)

            if (hasItem) {
                state.cartItems = state.cartItems.map((c) => c._id === hasItem._id ? item : c)
            } else {
                state.cartItems = [...state.cartItems, item]
            }
            updateCart(state)
        },
    },
})


export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

// export const { useGetOrdersSlice } = ordersApiSlice