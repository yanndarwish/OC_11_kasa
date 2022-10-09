// Dependecies
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
// components
import Router from "./rooter/Rooter"
// CSS imports
import "./style/common.css"
import "./style/Header.css"
import "./style/Banner.css"
import "./style/Footer.css"
import "./style/Thumb.css"
import "./style/Error-404.css"
import "./style/Tag.css"
import "./style/Rating.css"
import "./style/Dropdown.css"
import "./style/Slideshow.css"
import "./style/HousingLayout.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={Router} />)
