import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Reducers/productReducer';
import cartReducer from './Reducers/cartReducer';

const reducer = {
  products: productSlice,
  cart: cartReducer,
};
export const store = configureStore({
  reducer: reducer,
});
