import "./assets/css/shoppingCart.css";

import AddedProduct from "./AddedProduct"

import {getCartTotal,clearCart} from "../features/cart/cartSlice"

import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import {useEffect,useState,forwardRef} from "react"


const ShoppingCart = forwardRef((props,ref) => {
	const {shoppingCartList,productCount,totalPrice} = useSelector(state => state.cart)
	const navigation = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getCartTotal())
	},[dispatch])
	return(
		<div className="shoppingCart" ref={ref}>
			<div className="addedProducts">
				{
					shoppingCartList.length == 0 ? <div className="shoppingCartWarning">Your basket is empty</div> : shoppingCartList?.map((added,i) => 
						<AddedProduct added={added} key={i} />
					)
				}
			</div>
			<div className="summary">
				<div className="cartOptions">
					<span onClick={() => dispatch(clearCart())}>Clear All</span>
					<span>Go to Buy</span>
				</div>
				<div className="summaryBill">
					<span>Total: <span className="totalPrice">${totalPrice.toFixed(1)}</span></span>
				</div>
			</div>
		</div>
	)
})

export default ShoppingCart