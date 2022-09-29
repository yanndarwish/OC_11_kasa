import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Root = () => {
	return (
		<div>
			<div className="main-wrapper">
				<Header />
				<div id="main-content">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Root
