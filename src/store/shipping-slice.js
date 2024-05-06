import { createSlice } from '@reduxjs/toolkit';

const shippingSlice = createSlice({
    name: 'shipping',
    initialState: {
        orders: [],
        changed: false
    },
    reducers: {
        replaceOrders(state, action) {
            state.orders = action.payload.orders;
        },
    }
});
export const shippingActions = shippingSlice.actions;
export default shippingSlice;