// assets
import arrow from "../utils/assets/arrow.svg"

const HousingDropdown = ({ name, content }) => {
	const handleClick = (e) => {
		let clicked = e.target.getAttribute("data-targetted")
		let node = document.querySelector(`.housing-${clicked}`)
		let icon = document.querySelector(`.housing-icon-${clicked}`)

		if (!node.classList.contains("housing-dropdown-content-open")) {
			node.classList.add("housing-dropdown-content-open")
			icon.classList.add("arrow-icon-open")
		} else {
			node.classList.remove("housing-dropdown-content-open")
			icon.classList.remove("arrow-icon-open")
		}
	}
	return (
		<article
			className="housing-dropdown"
			data-targetted={name}
			onClick={(e) => handleClick(e)}
		>
			<div className="housing-dropdown-header flex" data-targetted={name}>
				<h2 className="housing-dropdown-title" data-targetted={name}>
					{name}
				</h2>
				<img
					src={arrow}
					alt="arrow icon"
					className={`arrow-icon housing-icon-${name}`}
					data-targetted={name}
				/>
			</div>
			<div
				className={`housing-dropdown-content housing-${name}`}
				data-targetted={name}
			>
				{typeof content === "string" ? (
					<p data-targetted={name}>{content}</p>
				) : (
					<ul className="dropdown-list">
						{content.map((value, index) => (
							<li key={index}>{value}</li>
						))}
					</ul>
				)}
			</div>
		</article>
	)
}

export default HousingDropdown
