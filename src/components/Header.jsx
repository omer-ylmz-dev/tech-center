import "./assets/css/header.css";

import Categories from "./Categories";
import ShoppingCart from "./ShoppingCart";

import { GrSearch } from "react-icons/gr";
import { LuLogIn } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";

import {NavLink,useNavigate,useSearchParams} from "react-router-dom"
import {useEffect,useRef,useState} from "react"
import {useDispatch,useSelector} from "react-redux"

import {productSearching,setFilteringParameters,filteringProcess} from "../features/product/productSlice"
import {getCartTotal} from "../features/cart/cartSlice"
import {ShoppingCartStatus,shoppingCart} from "../features/window/windowSlice"

import useSearchingParameters from "../hooks/useSearchingParameters"



import useClickOutside from "../hooks/useClickOutside"

export default function Header(){
	
	const shoppingCartStatus = useSelector(ShoppingCartStatus)
	const {search,setSearch,searchTags,setSearchTags,settingTags} = useSearchingParameters()
	const dispatch = useDispatch()
	const navigation = useNavigate()
	const {shoppingCartList,productCount} = useSelector(state => state.cart)
	
	const reference = useClickOutside(() => dispatch(shoppingCart(false)))
	
	const searchingProcess = () => {
		navigation(`/searchResults?tag=${searchTags.tag}`)
	}
	
	
	useEffect(() => {
		dispatch(getCartTotal())
	},[dispatch,shoppingCartList])
	

	return(
	<>
		<header className="topbar">
			<header className="menu">
				<div className="shoppingCartCount">{productCount}</div>
				<header className="brand">
					<span>TechCenter</span>
				</header>
				<footer className="options">
					<div className="search">
						<input type="text" placeholder="Search" name="tag" defaultValue={search.get("tag") ? search.get("tag") : ""} onChange={(e) => settingTags(e)}/>
						<GrSearch size={25} className="headerButtons" onClick={searchingProcess} />
					</div>
					<FiShoppingCart size={25} className="headerButtons" onClick={(e) => {
						e.stopPropagation();
						dispatch(shoppingCart(true))
					}} />
					{shoppingCartStatus && <ShoppingCart ref={reference} />}
				</footer>
			</header>
			<nav className="navbar">
				<div className="navbarLinks">
					<NavLink to="/" className="navbarLink">Home</NavLink>
					<div id="categoriesDropdown">
						<span className="navbarLink">Categories</span>
						<Categories/>
					</div>
					<NavLink to="/about" className="navbarLink">About</NavLink>
				</div>
			</nav>
		</header>
	</>
	)
}