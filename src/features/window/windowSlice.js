import {createSlice,createSelector} from "@reduxjs/toolkit";

const initialState = {
	shoppingCartStatus: false,
}


export const windowSlice = createSlice({
	name: "window",
	initialState,
	reducers:{
		shoppingCart: (state,action) => {
			if(action.payload === true){
				state.shoppingCartStatus = true
			}else{                       
				state.shoppingCartStatus = false
			}
		}
	}
})

export const {shoppingCart} = windowSlice.actions;

export default windowSlice.reducer;

export const ShoppingCartStatus = createSelector(state => state.windowStatus, windowStatus => windowStatus.shoppingCartStatus);