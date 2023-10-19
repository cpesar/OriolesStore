

export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state, action) => {
    const item = action.payload;
    // const { user, rating, numReviews, ...item } = action.payload
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    // console.log(state.itemsPrice)

    //Calculate shipping price (if order is > $100, free shipping. Else, $10 shipping)
    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)
    //Calculate tax price (15% of total price)
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
    //Calculate total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2)

    localStorage.setItem('cart', JSON.stringify(state))

    return state
}

