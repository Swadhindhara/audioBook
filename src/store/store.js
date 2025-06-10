import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './../features/Categories/categorySlice';
// import productsReducer from '../features/Products/productsSlice';
// import authReducer from '../features/Auth/authSlice';
import userReducer from '../features/User/userSlice'



//New Redux

import bannerReducer from './bannerSlice';
import pageReducer from './pagesSlice'
import productReducer from './productSlice';
import subscriptionReducer from './subscriptionSlice'
import orderReducer from './orderSlice'
import authReducer from './authSlice';
import categoriesReducer from './categorySlice';

const store = configureStore({
    reducer: {
        categories: categoryReducer,
        // products: productsReducer,
        // user: authReducer,
        LogProfile: userReducer,
        
        
        
        
        //New redux
        
        banner: bannerReducer,
        page: pageReducer,
        product: productReducer,
        subscription: subscriptionReducer,
        order: orderReducer,
        auth: authReducer,
        category: categoriesReducer,


    }
})

export default store;