import { useRouteError, Link } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Error = () => {
	const error = useRouteError()
	console.error(error)

	return (
		<div>
			<div className="main-wrapper">
				<Header />
				<main className="error-main-wrapper">
					<div className="error-container flex">
						<h1 className="error-status">404</h1>
						<p className="error-message">
							Oups! La page que vous demandez n'existe pas.
						</p>
						<Link to="/home" className="error-link">
							Retourner sur la page d’accueil
						</Link>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default Error
