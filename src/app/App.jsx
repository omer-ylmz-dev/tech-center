import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import ShoppingCart from "../components/ShoppingCart";
import Loading from "../components/Loading";

import {lazy,Suspense} from "react"

import {useDispatch,useSelector} from "react-redux"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import MainPage from "../pages/MainPage"

const Products = lazy(() => import("../pages/Products"))
const ProductDetails = lazy(() => import("../pages/ProductDetails"))
const SearchResults = lazy(() => import("../pages/SearchResults"))
const About = lazy(() => import("../pages/About"))
const Page404 = lazy(() => import("../pages/Page404"))

export default function App() {
	
	return (
		<>
			<Router>
				<Header/>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/products/:page" element={<Suspense fallback={<Loading/>}><Products /></Suspense>} />
					<Route path="/products/:page/:productname" element={<Suspense fallback={<Loading/>}><ProductDetails /></Suspense>} />
					<Route path="/searchResults" element={<Suspense fallback={<Loading/>}><SearchResults /></Suspense>} />
					<Route path="/about" element={<Suspense fallback={<Loading/>}><About /></Suspense>} />
					<Route path="*" element={<Suspense fallback={<Loading/>}><Page404 /></Suspense>} />
				</Routes>
				<Footer/>
			</Router>
		</>
	)
}

