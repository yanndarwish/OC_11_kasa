// dependencies
import PropTypes from "prop-types"

const Tags = ({ tags }) => {
	return (
		<div className="tag-wrapper flex">
			{tags.map((value, index) => (
				<div key={`${value}-${index}`} className="tag flex center">
					<span>{value}</span>
				</div>
			))}
		</div>
	)
}

Tags.propTypes = {
	tags: PropTypes.array.isRequired,
}

Tags.defaultProps = {
	tags: [],
}

export default Tags
