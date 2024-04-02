import "./assets/css/addedProduct.css";

import { IoIosRemoveCircleOutline } from "react-icons/io";

import {removeFromCart} from "../features/cart/cartSlice"

import {useDispatch} from "react-redux"

export default function AddedProduct({added}){
	const dispatch = useDispatch()
	
	return(
		<div className="addedProduct">
			<div className="addedProductImage">
				<img src={`/images/products/${added?.productImage}`} width="50" height="50" />
			</div>
			<div className="addedProductDetails">
				<span>{added.title}</span>
			</div>
			<span className="addedProductCountDetail">{added.count}</span>
			<div className="removeProduct">
				<IoIosRemoveCircleOutline size={30} onClick={() => dispatch(removeFromCart(added.productID))} className="shoppingCartRemove"/>
			</div>
		</div>
	)
}