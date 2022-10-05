// dependencies
import { useParams } from "react-router-dom"
// components
import datas from "../../data/data"
import Tags from "../../components/Tags"
import Rating from "../../components/Rating"
import Dropdown from "../../components/Dropdown"
import Slideshow from "../../components/Slideshow"

const Housing = () => {
	let { housingId } = useParams()
	const housing = datas.find((item) => item.id === housingId)

	return (
		<div className="housing-main-container">
			<div className="slideshow-container">
				<Slideshow pictures={housing.pictures} />
			</div>
			<section className="housing-main-infos flex">
				<div className="housing-infos-1 flex">
					<h1 className="housing-title">{housing.title}</h1>
					<h2 className="housing-location">{housing.location}</h2>
					<div className="tag-container">
						<Tags tags={housing.tags} />
					</div>
				</div>
				<div className="housing-infos-2 flex">
					<div className="rating-container">
						<Rating rating={parseInt(housing.rating)} />
					</div>
					<div className="housing-profile flex">
						<h3 className="housing-profile-name">{housing.host.name}</h3>
						<img src={housing.host.picture} alt={housing.host.name} />
					</div>
				</div>
			</section>
			<section className="housing-dropdown-container flex">
				<Dropdown name="Description" content={housing.description} />
				<Dropdown name="Équipements" content={housing.equipments} />
			</section>
		</div>
	)
}

export default Housing
