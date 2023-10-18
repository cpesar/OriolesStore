import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice.js';
import { ORDERS_URL } from '../constants.js'

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] }

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const hasItem = state.cartItems.find((c) => c._id === item._id)

            if (hasItem) {
                state.cartItems = state.cartItems.map((c) => c._id === item._id ? item : c)
            } else {
                state.cartItems = [...state.cartItems, item]
            }

            //Calculate item price
            state.itemsPirce = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
            //Calculate shipping price (if order is > $100, free shipping. Else, $10 shipping)
            state.shippingPrice = addDecimals(state.itemsPirce > 100 ? 0 : 10)
            //Calculate tax price (15% of total price)
            state.taxPrice = addDecimals(Number(0.15 * state.itemsPirce).toFixed(2))
            //Calculate total price
            state.totalPrice = (
                Number(state.itemsPirce) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2)

            localStorage.setItem('cart', JSON.stringify(state))
        },
    },
})




export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

// export const { useGetOrdersSlice } = ordersApiSlice