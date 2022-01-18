import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, singleGetProduct } from '../Actions/productAction';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    allProducts: [],
    singleProduct: {},
    isLoading: false,
    error: {},
  },
  reducers: {
    /*  allProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    }, */
  },
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [singleGetProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [singleGetProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleProduct = action.payload;
    },
    [singleGetProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
//export const { allProduct } = productSlice.actions;
export default productSlice.reducer;
