import {configureStore} from "@reduxjs/toolkit";

import windowSlice from "../features/window/windowSlice";
import productSlice from "../features/product/productSlice";
import cartSlice from "../features/cart/cartSlice";


export const store = configureStore({
	reducer:{
		windowStatus: windowSlice,
		products: productSlice,
		cart: cartSlice
	}
})

