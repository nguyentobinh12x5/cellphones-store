import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  loading: false,
  error: "",
};
export const fetchData = createAsyncThunk("data/fetchData", () => {
  return axios
    .get(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
    .then((response) => response.data);
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});
export const selectData = (state) => state.data.products;
export const selectProductByName = (state, productName) =>
  state.data.products.find((product) => product.name === productName);
export default dataSlice.reducer;
