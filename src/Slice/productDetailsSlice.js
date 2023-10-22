import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(`================================================`, data);
    return data;
  }
);

const productDetailsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    product: {},
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.product = {};
      state.error = action.error.message;
    });
  },
});

export default productDetailsSlice.reducer;
