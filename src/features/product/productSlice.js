import {createSlice,createSelector} from "@reduxjs/toolkit";
import products from "../../data/products"

const initialState = {
	productList:[],
	selectedProduct:[],
	sortingParameters:null,
	filteringParameters:"all_colors",
	searchingParameters:null,
	categoryStatus:null
	
}


export const windowSlice = createSlice({
	name: "window",
	initialState,
	reducers:{
		getCategoryProducts: (state,action) => {
			if(action.payload === "all"){
				state.productList = [...products]
				state.categoryStatus = action.payload
			}else{
				state.productList = [...products.filter(product => product.category === action.payload)]
				state.categoryStatus = action.payload
			}
			
		},
		getSelectedProduct: (state,action) => {
			state.selectedProduct = products.filter(product => product.productID === action.payload)
		},
		productSearching: (state,action) => {
			
			state.searchingParameters = action.payload
			let searchedInList = [...products]
			
			searchedInList = [...searchedInList.filter(p => p.title.includes(action.payload))]
			
			
			state.productList = searchedInList
			
			
		},
		deleteSearchingParameters: (state) => {
			state.searchingParameters = null
		},
		setFilteringParameters: (state,action) => {
			state.sortingParameters = action.payload.sortingType
			state.filteringParameters = action.payload.color
		},
		filteringProcess: (state) => {
			
			let filteredList = null
			
			if(state.searchingParameters){
				filteredList = [...products.filter(p => p.title.includes(state.searchingParameters))]
			}else{
				filteredList = [...products]
			}
			
			if(state.sortingParameters){
				switch(state.sortingParameters){
					case "price_asc":
						filteredList = [...filteredList.sort((a,b) => a.price - b.price)]
						break
					case "price_desc":
						filteredList = [...filteredList.sort((a,b) => b.price - a.price)]
						break
					case "rate_asc":
						filteredList = filteredList.sort((a,b) => a.rate - b.rate)
						break
					case "rate_desc":
						filteredList = filteredList.sort((a,b) => b.rate - a.rate)
						break	
					default:
						return filteredList
				}
			}
			
		
			
			if(state.filteringParameters !== "all_colors"){
				filteredList = filteredList.filter(product => product.productColor === state.filteringParameters)
			}
			
			if(state.searchingParameters == null && state.categoryStatus !== "all"){
				filteredList = filteredList.filter(product => product.category === state.categoryStatus)
			}
			
			
			state.productList = filteredList
		
			
			
		}
	}
})


export const {getCategoryProducts,getSelectedProduct,getPriceSorting,getRatingSorting,getFiltering,productSearching,setFilteringParameters, filteringProcess,testt,deleteSearchingParameters} = windowSlice.actions;

export default windowSlice.reducer;
