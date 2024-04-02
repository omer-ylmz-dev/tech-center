import "../components/assets/css/products.css";

import Product from "../components/Product"
import Filters from "../components/Filters"

import { useParams,useSearchParams } from "react-router-dom";
import {useEffect,useState,useCallback,useMemo} from "react"
import {useDispatch,useSelector} from "react-redux"

import {getCategoryProducts,setFilteringParameters,filteringProcess,deleteSearchingParameters} from "../features/product/productSlice"

import { IoIosFunnel } from "react-icons/io";

import useSearchingParameters from "../hooks/useSearchingParameters"



export default function Products(){
	const {search,setSearch,searchTags,setSearchTags,settingTags} = useSearchingParameters()
	const dispatch = useDispatch()

	
	const {page} = useParams()
	
	const {productList} = useSelector(state => state.products)
	
	useEffect(() => {
		dispatch(getCategoryProducts(page))
	},[dispatch,page])
	
	
	useEffect(() => {
		search.set(Object.keys(searchTags)[0],Object.values(searchTags)[0])
		search.set(Object.keys(searchTags)[1],Object.values(searchTags)[1])
		setSearch(search,{
			replace:true
		})
		dispatch(deleteSearchingParameters())
		dispatch(setFilteringParameters(searchTags))
		dispatch(filteringProcess())
	},[searchTags,search.get("sortingType"),search.get("color")])
	
	
	
	return(
		<div className="products">
			<header className="filters">
				<Filters 
					settingTags={settingTags}
					sortingTag={search.get("sortingType")}
					colorTag={search.get("color")}
				/>
			</header>
			<section className="results">
				{
					productList?.map((product,i) => 
						<Product product={product} key={i} />
					)
				}
			</section>
		</div>
	)
}