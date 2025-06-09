import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "./userAPI";
import { toast } from "sonner";

export const fetchProfile = createAsyncThunk('get/profile', async(_, thunkAPI) => {
    try {
        const response = await userAPI.getProfile();        
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || 'Not getting profile')
    }
})

export const updateUser = createAsyncThunk('user/updateUser', async (userData, thunkAPI) => {
    try {
        const response = await userAPI.updateProfile(userData);
        return response;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message || "Failed to update user");
    }
})

const useSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfile.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        })
        .addCase(fetchProfile.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(fetchProfile.rejected, (state, action) => {
            state.isError = action.error.message;
            state.isSuccess = false;
            state.isLoading = false;
        })

        // =========== Update =================
        .addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            toast.success("User updated successfully");
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error(action.payload);
        })
    }
})



export default useSlice.reducer;