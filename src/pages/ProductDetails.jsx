import "../components/assets/css/productDetails.css";

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import { useParams } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import {useEffect,useState} from "react"

import {getSelectedProduct} from "../features/product/productSlice"
import {addToCart} from "../features/cart/cartSlice"




export default function ProductDetails(){
	const {productname} = useParams()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getSelectedProduct(productname))
	},[dispatch,productname])
	
	const {selectedProduct} = useSelector(state => state.products)
	
	const [count,setCount] = useState(0)
	const decrement = () => {
		if(count > 0){
			setCount(count - 1)
		}
	}
	const increment = () => {
		setCount(count + 1)
	}
	const addToShoppingCart = () => {
		if(count !== 0){
			dispatch(addToCart({productID: selectedProduct[0]?.productID, title: selectedProduct[0]?.title, quantity: selectedProduct[0]?.quantity , count: count, productImage: selectedProduct[0]?.productImage, price: selectedProduct[0]?.price }))
		}
	}
	
	return(
	<>
		<div className="productPage">
			<div className="productDetails">
				<div className="productDetailImage">
					<img src={`/images/products/${selectedProduct[0]?.productImage}`} width="300" height="300" />
				</div>
				<div className="productDetailContent">
					<div className="productDetailName">
						<h1>{selectedProduct[0]?.title}</h1>
					</div>
					<div className="productMainDetails">
						<p>{selectedProduct[0]?.description}</p>
						<p>Price : <span className="productPrice">${selectedProduct[0]?.price}</span></p>
						<p>Rating : {selectedProduct[0]?.rate} / 5</p>
					</div>
					<div className="productDetailOptions">
						<div className="productCount">
							<IoIosAddCircleOutline size={30} onClick={increment} className="productCountOptions"/>
							<span className="addedProductCount">{count}</span>
							<IoIosRemoveCircleOutline size={30} onClick={decrement} className="productCountOptions"/>
						</div>
						<div className="addToCart" onClick={addToShoppingCart}>Add to Cart</div>
					</div>
				</div>
			</div>
		</div>
	</>
	)
}