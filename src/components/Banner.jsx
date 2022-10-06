// dependencies
import PropTypes from "prop-types"

const Banner = ({ name }) => {
	if (name === "about") {
		return (
			<div className="about-banner banner">
				<div className="banner-overlay"></div>
			</div>
		)
	}
	return (
		<div className="banner flex">
			<div className="banner-overlay"></div>
			<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
		</div>
	)
}

Banner.propTypes = {
	name: PropTypes.string.isRequired,
}

Banner.defaultProps = {
	name: "",
}

export default Banner
