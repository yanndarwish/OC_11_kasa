import star from "../utils/assets/star-icon.svg"
import starActive from "../utils/assets/star-icon-active.svg"

const Rating = ({ rating }) => {
	const range = [1, 2, 3, 4, 5]
	return (
		<div className="rating-wrapper flex">
			{range.map((index) =>
				rating >= index ? (
					<img
						src={starActive}
						alt="star-icon"
						key={index.toString()}
						className="star-icon star-icon-active"
					/>
				) : (
					<img
						src={star}
						alt="star-icon"
						key={index.toString()}
						className="star-icon"
					/>
				)
			)}
		</div>
	)
}

export default Rating
