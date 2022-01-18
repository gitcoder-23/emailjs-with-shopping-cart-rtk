import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProducts = createAsyncThunk('products', async () => {
  const responce = await axios.get('https://fakestoreapi.com/products');
  console.log('response=>>', responce.data);
  return responce.data;
});
export let singleGetProduct = createAsyncThunk('product', async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  console.log('res', res);
  return res.data;
});

/* const getUser = () => {
  RootApi.get('/department')
    .then((response) => {
      console.log('res->', response);
      setAllDepartment(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}; */
