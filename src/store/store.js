import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './../features/Categories/categorySlice';
import productReducer from '../features/Products/productsSlice';
import authReducer from '../features/Auth/authSlice';
import userReducer from '../features/User/userSlice'



//New Redux

import bannerReducer from './bannerSlice';
import pageReducer from './pagesSlice'


const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productReducer,
        user: authReducer,
        LogProfile: userReducer,
        
        
        
        
        //New redux
        
        banner: bannerReducer,
        page: pageReducer,

    }
})

export default store;