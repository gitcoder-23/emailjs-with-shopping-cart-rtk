import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const cartReducer = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    /*  addItemToCart: (state, action) => {
      state.quantity += 1;
    }, */

    addItemToCart: (state, action) => {
      const product = action.payload;
      const existProduct = state.find((item) => item.id === product.id);
      if (existProduct) {
        return state.map((data) =>
          data.id === product.id ? { ...data, qty: data.qty + 1 } : data
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    },

    removeItemToCart: (state, action) => {
      const product = action.payload;
      const existProduct = state.find((item) => item.id === product.id);
      if (existProduct.qty === 1) {
        return state.filter((data) => data.id !== existProduct.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    },

    /* removeItemToCart: (state) => {
      if (state.quantity <= 0) return;
      else state.quantity -= 1;
    }, */
  },
});

export const { addItemToCart, removeItemToCart } = cartReducer.actions;
export default cartReducer.reducer;
