// Dependecies
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Pages
import Root from "./components/Root"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Housing from "./pages/Housing/Housing"
import Error from "./pages/Error/Error"
// CSS imports
import "./style/common.css"
import "./style/Header.css"
import "./style/Banner.css"
import "./style/Footer.css"
import "./style/Thumb.css"
import "./style/Error-404.css"
import "./style/AboutBanner.css"
import "./style/AboutDropdown.css"
import "./style/Tag.css"
import "./style/Rating.css"
import "./style/HousingDropdown.css"
import "./style/Slideshow.css"
import "./style/HousingLayout.css"

const router = createBrowserRouter([
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

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
