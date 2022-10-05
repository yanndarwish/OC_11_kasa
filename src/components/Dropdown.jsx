// assets
import arrow from "../utils/assets/arrow.svg"

const Dropdown = ({ name, content }) => {
	const handleClick = (e) => {
		let clicked = e.target.getAttribute("data-targetted")
		let node = document.querySelector(`.about-${clicked}`)
			? document.querySelector(`.about-${clicked}`)
			: document.querySelector(`.housing-${clicked}`)

		let icon = document.querySelector(`.about-icon-${clicked}`)
			? document.querySelector(`.about-icon-${clicked}`)
			: document.querySelector(`.housing-icon-${clicked}`)

		if (!node.classList.contains("dropdown-content-open")) {
			node.classList.add("dropdown-content-open")
			icon.classList.add("arrow-icon-open")
		} else {
			node.classList.remove("dropdown-content-open")
			icon.classList.remove("arrow-icon-open")
		}
	}
	if (
		name === "Fiabilité" ||
		name === "Respect" ||
		name === "Service" ||
		name === "Sécurité"
	) {
		return (
			<article
				className="dropdown"
				data-targetted={name}
				onClick={(e) => handleClick(e)}
			>
				<div className="dropdown-header flex" data-targetted={name}>
					<h2
						className="about-dropdown-title dropdown-title"
						data-targetted={name}
					>
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
					className={`dropdown-content about-dropdown-content about-${name}`}
					data-targetted={name}
				>
					<p data-targetted={name}>{content}</p>
				</div>
			</article>
		)
	}
	return (
		<article
			className="dropdown"
			data-targetted={name}
			onClick={(e) => handleClick(e)}
		>
			<div className="dropdown-header flex" data-targetted={name}>
				<h2
					className="housing-dropdown-title dropdown-title"
					data-targetted={name}
				>
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
				className={`dropdown-content housing-dropdown-content housing-${name}`}
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

export default Dropdown
