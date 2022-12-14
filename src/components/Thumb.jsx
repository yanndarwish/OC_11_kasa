// dependencies
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Thumb = ({ data }) => {
	return (
		<Link to={`/housing/${data.id}`}>
			<article className="thumb main-theme flex" >
				<img
					src={data.pictures[0]}
					alt={`${data.title} thumb`}
					className="thumb-img"
				/>
				<h2 className="thumb-title">{data.title}</h2>
			</article>
		</Link>
	)
}

Thumb.propTypes = {
	data: PropTypes.object.isRequired,
}

Thumb.defaultProps = {
	data: {},
}

export default Thumb
