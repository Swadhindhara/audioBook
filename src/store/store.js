import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './../features/Categories/categorySlice';
import pageReducer from '../features/Pages/PageSlice';
import productReducer from '../features/Products/productsSlice'

const store = configureStore({
    reducer: {
        categories: categoryReducer,
        page: pageReducer,
        products: productReducer
    }
})

export default store;