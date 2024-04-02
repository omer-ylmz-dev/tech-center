import "./assets/css/loading.css"

export default function Loading() {
	return (
		<>
			<div className="loadingComponent">
				<div className="loading">
					<img src={`/images/loading.gif`} width="100" height="100"/>
				</div>
			</div>
		</>
	)
}
