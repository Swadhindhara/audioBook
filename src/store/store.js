import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './../features/Categories/categorySlice';
import pageReducer from '../features/Pages/PageSlice';
import productReducer from '../features/Products/productsSlice';
import authReducer from '../features/Auth/authSlice';
import userReducer from '../features/User/userSlice'

const store = configureStore({
    reducer: {
        categories: categoryReducer,
        page: pageReducer,
        products: productReducer,
        user: authReducer,
        LogProfile: userReducer
    }
})

export default store;