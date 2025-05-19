import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk("get/products", async () => {
  const res = await axios.get("http://localhost:9003/foods");
  return res.data;
});

export const postProductThunk = createAsyncThunk(
  "products/add",
  async (data) => {
    console.log("POST:", data);
    const res = await axios.post("http://localhost:9003/foods", data);
    return res.data;
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/delete",
  async (productId) => {
    await axios.delete(`http://localhost:9003/foods/${productId}`);
    return productId;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(postProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(postProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.loading=false
        state.products= state.products.filter(product=> product._id!== action.payload)
      })
     
  },
});

export default productSlice.reducer;