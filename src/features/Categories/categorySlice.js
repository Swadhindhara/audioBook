import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import categoryAPI from "./categories"



export const fetchCategories = createAsyncThunk('getCategories/get', async(_, thunkAPI) => {
    try {
        const response = await categoryAPI.getCategories();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Not getting any categories")
    }
})

const categorySlice = createSlice({
    name : "category",
    initialState: {
        categories: [],
        isLoading: false,
        isError: false,
    },
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.categories = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.isError = action.error.message;
            state.isLoading = false;
        })
    }
})


export default categorySlice.reducer;