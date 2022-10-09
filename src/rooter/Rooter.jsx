// dependencies
import { createBrowserRouter } from "react-router-dom"
// Pages
import Root from "../components/Root"
import About from "../pages/About/About"
import Home from "../pages/Home/Home"
import Housing from "../pages/Housing/Housing"
import Error from "../pages/Error/Error"

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/housing/:housingId",
				element: <Housing />,
			},
		],
	},
])

export default Router
