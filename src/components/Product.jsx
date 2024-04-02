import "./assets/css/product.css";

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import { useNavigate,useLocation } from "react-router-dom";

export default function Product({product}){
	const navigation = useNavigate()
	const {pathname} = useLocation()
	const getDetails = () => {
		if(pathname !== "/searchResults"){
			navigation(`${pathname + "/" + product?.productID}`)
		}else{
			navigation(`${"/products/" + product.category + "/" + product?.productID}`)
		}
	}
	return(
		<div className="product" onClick={getDetails} title={product?.title}>
			<div className="productImage" >
				<img src={`/images/products/${product?.productImage}`} width="200" height="200" alt="Product"  />
			</div>
				<span>{product?.title}</span>
				<div className="productOptions">
					
					<div className="productPrice">
						<span>${product?.price}</span>
					</div>
				</div>
			
		</div>
	)
}