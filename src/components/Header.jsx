import { Link, useLocation } from "react-router-dom"

const Header = () => {
	const location = useLocation()
	if (location.pathname === '/home') {
		document.getElementById('home').classList.add('active')
		document.getElementById('about').classList.remove('active')
	} else if (location.pathname === '/about') {
		document.getElementById("about").classList.add("active")
		document.getElementById("home").classList.remove("active")
	}

	return (
		<header className="main-header flex">
			<Link to="/home">
				<div className="logo"></div>
			</Link>
			<nav className="main-nav flex">
				<Link
					to="/home"
					id="home"
					className="nav-item active"
				>
					ACCUEIL
				</Link>
				<Link to="/about" id="about" className="nav-item">
					A PROPOS
				</Link>
			</nav>
		</header>
	)
}

export default Header
