import "../components/assets/css/products.css";

import Product from "../components/Product"
import Filters from "../components/Filters"

import { useParams,useSearchParams,useLocation } from "react-router-dom";
import {useEffect,useState,useCallback,useMemo} from "react"
import {useDispatch,useSelector} from "react-redux"

import {getCategoryProducts,setFilteringParameters,filteringProcess,productSearching} from "../features/product/productSlice"

import { IoIosFunnel } from "react-icons/io";

import useSearchingParameters from "../hooks/useSearchingParameters"


export default function Products(){
	const {search,setSearch,searchTags,setSearchTags,settingTags} = useSearchingParameters()
	
	const dispatch = useDispatch()
	const {productList} = useSelector(state => state.products)
	const loc = useLocation()
	
	const searchingTag = loc.search.split("?tag=")[1].slice(0,loc.search.split("?tag=")[1].indexOf("&"))
	
	
	useEffect(()=>{
		dispatch(productSearching(searchingTag))
	},[searchingTag])
	
	
	useEffect(() => {
		search.set(Object.keys(searchTags)[0],Object.values(searchTags)[0])
		search.set(Object.keys(searchTags)[1],Object.values(searchTags)[1])
		setSearch(search,{
			replace:true
		})
		dispatch(setFilteringParameters(searchTags))
		dispatch(productSearching(searchingTag))
		dispatch(filteringProcess())
	},[searchTags,searchingTag,search.get("sortingType"),search.get("color")])
	

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
					productList.length == 0 ? <div className="noResult">No result</div> : productList?.map((product,i) => 
						<Product product={product} key={i} />
					)
				}
			</section>
		</div>
	)
}