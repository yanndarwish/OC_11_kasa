// assets
import leftArrow from "../utils/assets/slide-arrow-left.svg"
import rightArrow from "../utils/assets/slide-arrow-right.svg"

const Slideshow = ({ pictures }) => {
	let currentSlide = 1
	let index = currentSlide - 1

	const handleClick = (n) => {
		currentSlide += n
		index += n

		if (currentSlide > pictures.length) {
			currentSlide = 1
			index = 0
		}
		if (currentSlide === 0) {
			currentSlide = pictures.length
			index = pictures.length - 1
		}
		document.querySelector(".slide").src = `${pictures[index]}`
		document.querySelector(".current-slide").innerHTML = currentSlide
	}

	return (
		<div className="slideshow-wrapper">
			<img
				src={pictures[index]}
				alt={`slide n°${currentSlide}`}
				className="slide"
			/>
			<div className="slide-number">
				<span className="current-slide">{currentSlide}</span> /
				<span className="slideshow-length">{pictures.length}</span>
			</div>
			{pictures.length > 1 && (
				<div>
					<img
						src={leftArrow}
						alt="left icon"
						className="slide-icon left"
						onClick={() => handleClick(-1)}
					/>
					<img
						src={rightArrow}
						alt="right icon"
						className="slide-icon right"
						onClick={() => handleClick(1)}
					/>
				</div>
			)}
		</div>
	)
}

export default Slideshow
