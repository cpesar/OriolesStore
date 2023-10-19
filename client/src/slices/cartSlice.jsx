import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice.js';
import { ORDERS_URL } from '../constants.js'
import { updateCart } from '../utils/cartUtils.jsx';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] }

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // This is undefined
            const items = action.payload;
            // const { user, rating, numReviews, ...item } = action.payload

            const hasItem = state.cartItems.find((h) => h._id === items._id)

            if (hasItem) {
                state.cartItems = state.cartItems.map((c) => c._id === hasItem._id ? items : c)
            } else {
                state.cartItems = [...state.cartItems, items]
            }


            return updateCart(state)

        },
    },
})




export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

// export const { useGetOrdersSlice } = ordersApiSlice