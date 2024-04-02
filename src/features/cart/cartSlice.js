import {createSlice,createSelector} from "@reduxjs/toolkit";

const initialState = {
	shoppingCartList: [],
	productCount:0,
	totalPrice:0
}


export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers:{
		addToCart: (state,action) => {
			const isAdded = state.shoppingCartList.find(product => product?.productID === action.payload.productID)
			let updatedShoppingCart = null
			
			if(isAdded){
				updatedShoppingCart = [...state.shoppingCartList.map(product => {
					if(product?.productID === action.payload.productID){
						const totalCount = product.count + action.payload.count
						const totalAmount = product.price * totalCount
						
						return {
							...product,
							count: totalCount,
							totalAmount: totalAmount
							
						}
						
					}
					return product
				})]
			} else {
				updatedShoppingCart = [...state.shoppingCartList, action.payload]
			}
			
			
			state.shoppingCartList = updatedShoppingCart
			
		},
		removeFromCart : (state,action) => {
			state.shoppingCartList = state.shoppingCartList.filter(product => product?.productID !== action.payload)
		},
		clearCart : (state) => {
			state.shoppingCartList = []
		},
		getCartTotal : (state) => {
			state.totalPrice = state.shoppingCartList.reduce((cartTotal,cartProduct) => {
				return cartTotal += cartProduct.price * cartProduct.count
			},0)
			state.productCount = state.shoppingCartList.length
		}
	}
})

export const {addToCart,removeFromCart,clearCart,getCartTotal} = cartSlice.actions;

export default cartSlice.reducer;

export const ShoppingCartStatus = createSelector(state => state.windowStatus, windowStatus => windowStatus.shoppingCartList);