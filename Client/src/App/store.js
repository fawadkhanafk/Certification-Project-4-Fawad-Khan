import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/ShopCart/productSlice';
import cartReducer from '../features/ShopCart/cartSlice';
import filtersReducer from '../features/ShopCart/filterSlice'


export const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        filters:filtersReducer
    }
}) 