import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';  // Import axios

const initialState = {
    products: [],

    status: 'idle',
};

export const fetchProductsAPI = createAsyncThunk(
    'products/fetchProductsAPI',
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;  // Return the data to be stored in the state
    }
);

const productsSlice = createSlice({
    name: 'for_product',
    initialState,  // Use 'initialState' instead of 'INITIALSTATE'
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAPI.pending, (state) => {
                state.status = 'wait';
            })
            .addCase(fetchProductsAPI.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'done';
            })
            .addCase(fetchProductsAPI.rejected, (state) => {
                state.status = 'error';
            });
    },
});

export default productsSlice.reducer;