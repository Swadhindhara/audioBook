import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "./authAPI";


export const loginProfile = createAsyncThunk("auth/google/login", async(userData, thunkAPI) => {
    try {
        const response = await authAPI.loginUser(userData);
        if(response){
            localStorage.setItem("token", JSON.stringify(response.token));
            return authAPI.getProfile();
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || 'Use failed to login')
    }
})

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: null,
        isLoading: false,
        isError: false,
        isSuccess: false
    },
    reducers: {
        logout: (state)=>{
            state.user = null;
            authAPI.logout();
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginProfile.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        })
        .addCase(loginProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(loginProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = action.payload.error.message;
        })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;