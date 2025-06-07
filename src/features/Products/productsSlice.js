import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsAPI from "./products"


export const fetchAllProducts = createAsyncThunk(
    "getAllProducts", async(_, thunkAPI) => {
        try {
            const response = await productsAPI.getAllProducts();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || "Not getting any products.")
        }
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
            state.isError = action.error.message;
            state.isLoading = false;
        })
    }
})


export default productSlice.reducer;