import {NavLink} from "react-router-dom"

export default function Categories(){
	return(
		<div className="categories">
			<NavLink to="/products/laptops" className="categoryLink">Laptops</NavLink>
			<NavLink to="/products/laptop-accessories" className="categoryLink">Laptop Accessories</NavLink>
			<NavLink to="/products/smartphones" className="categoryLink">Smartphones</NavLink>
			<NavLink to="/products/smartphone-accessories" className="categoryLink">SmartPhone Accessories</NavLink>
			<NavLink to="/products/all" className="categoryLink">All Products</NavLink>
		</div>
	)
}