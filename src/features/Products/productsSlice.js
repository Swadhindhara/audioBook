// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import productsAPI from "./products";

// export const fetchAllProducts = createAsyncThunk(
//   "products/fetchAllProducts",
//   async (filters = {}, thunkAPI) => {
//     try {
//       const response = await productsAPI.getAllProducts(filters);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.message || "Not getting any products."
//       );
//     }
//   }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//     isLoading: false,
//     isError: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllProducts.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//       })
//       .addCase(fetchAllProducts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.products = action.payload;
//       })
//       .addCase(fetchAllProducts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = action.payload || "Something went wrong";
//       });
//   },
// });

// export default productSlice.reducer;
