import "../components/assets/css/page404.css"

import {useNavigate} from "react-router-dom"

export default function Page404() {
	const navigation = useNavigate()
	return (
		<>
			<div className="errorPage">
				<div className="errorContent">
					<h1>Page Not Found</h1>
					<h4>go to <span className="homeButton" onClick={() => navigation("/")}>Home</span></h4>
				</div>
			</div>
		</>
	)
}
