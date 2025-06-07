import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import pageAPI from "./Pages"


export const fetchPageData = createAsyncThunk("fetchPageData", async(id, thunkAPI) => {
    try {
        const response = await pageAPI.getPageData(id);
        return response;
    } catch (error) {
        return thunkAPI.fulfillWithValue(error.message || "Not getting page data");
    }
})

const pageSlice = createSlice({
    name: "pageSlice",
    initialState: {
        data: '',
        isLoading: false,
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPageData.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchPageData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isError = false;
        })
        .addCase(fetchPageData.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;
        })
    }
})

export default pageSlice.reducer;