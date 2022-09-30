// Dependencies
import { Link } from "react-router-dom"

const Header = () => {
	const handleClick = (option) => {
		if (option === "home") {
			document.getElementById("about").classList.remove("active")
			document.getElementById("home").classList.add("active")
		} else {
			document.getElementById("about").classList.add("active")
			document.getElementById("home").classList.remove("active")
		}
	}

	return (
		<header className="main-header flex">
			<Link to="/" onClick={() => handleClick("home")}>
				<div className="logo"></div>
			</Link>
			<nav className="main-nav flex">
				<Link
					to="/"
					id="home"
					className="nav-item active"
					onClick={() => handleClick("home")}
				>
					ACCUEIL
				</Link>
				<Link
					to="/about"
					id="about"
					className="nav-item"
					onClick={() => handleClick("about")}
				>
					A PROPOS
				</Link>
			</nav>
		</header>
	)
}

export default Header
