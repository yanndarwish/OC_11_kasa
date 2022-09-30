// assets
import arrow from "../utils/assets/arrow.svg"

const AboutDropdown = ({ name, description }) => {
	const handleClick = (e) => {
		let clicked = e.target.getAttribute("data-targetted")
		let node = document.querySelector(`.about-${clicked}`)
        let icon = document.querySelector(`.about-icon-${clicked}`)

		if (!node.classList.contains("about-dropdown-content-open")) {
			node.classList.add("about-dropdown-content-open")
            icon.classList.add("arrow-icon-open")
		} else {
            node.classList.remove("about-dropdown-content-open")
            icon.classList.remove("arrow-icon-open")
		}
	}

	return (
		<article
			className="about-dropdown"
			data-targetted={name}
			onClick={(e) => handleClick(e)}
		>
			<div className="about-dropdown-header flex" data-targetted={name}>
				<h2 className="about-dropdown-title" data-targetted={name}>
					{name}
				</h2>
				<img
					src={arrow}
					alt="arrow icon"
					className={`arrow-icon about-icon-${name}`}
					data-targetted={name}
				/>
			</div>
			<div
				className={`about-dropdown-content about-${name}`}
				data-targetted={name}
			>
				<p data-targetted={name}>{description}</p>
			</div>
		</article>
	)
}

export default AboutDropdown
