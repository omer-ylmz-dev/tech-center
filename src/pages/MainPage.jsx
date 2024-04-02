import "../components/assets/css/mainPage.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"

import {useNavigate} from "react-router-dom"

export default function Home() {
	const navigation = useNavigate()
	const settings = {
		infinite:true,
		autoplay:true,
		speed:500,
		slideToShow: 1,
		slideToScroll: 1
	}

	return (
		<>
			<section className="home">
				<Slider {...settings}>
					<div className="carousel">
						<div className="adContent">
							<div className="adImage">
								<img src="/images/products/laptop_1.jpg" width="500" height="400" />
							</div>
							<div className="adTextContent">
								<h1>ASUS ROG Strix G16 Gaming Laptop</h1>
								<p>NVIDIA® GeForce RTX™ 4070, Intel® Core™ i9-14900HX</p>
								<p className="productPrice">$1899.99</p>
								<span className="productLink" onClick={() => navigation("/products/product/laptop_1")}>View Product</span>
							</div>
						</div>
					</div>
					<div className="carousel">
						<div className="adContent">
							<div className="adImage">
								<img src="/images/products/laptop_2.jpg" width="500" height="400" />
							</div>
							<div className="adTextContent">
								<h1>SAMSUNG Galaxy Book 3 Business Laptop</h1>
								<p>13th Gen Intel® Core™ i7</p>
								<p className="productPrice">$749.99</p>
								<span className="productLink" onClick={() => navigation("/products/product/laptop_2")}>View Product</span>
							</div>
						</div>
					</div>
				</Slider>
				<Slider {...settings}>
					<div className="carousel">
						<div className="adContent">
							<div className="adImage">
								<img src="/images/products/phone_1.jpg" width="500" height="400" />
							</div>
							<div className="adTextContent">
								<h1>SAMSUNG Galaxy A25</h1>
								<p>AMOLED Display, Advanced Triple Camera System</p>
								<p className="productPrice">$264.99</p>
								<span className="productLink" onClick={() => navigation("/products/product/phone_1")}>View Product</span>
							</div>
						</div>
					</div>
					<div className="carousel">
						<div className="adContent">
							<div className="adImage">
								<img src="/images/products/phone_2.jpg" width="500" height="400" />
							</div>
							<div className="adTextContent">
								<h1>SAMSUNG Galaxy A53</h1>
								<p>6.5” FHD Super AMOLED Screen, Long Battery Life</p>
								<p className="productPrice">$380.98</p>
								<span className="productLink" onClick={() => navigation("/products/product/phone_2")}>View Product</span>
							</div>
						</div>
					</div>
				</Slider>
			</section>
			
		</>
  )
}