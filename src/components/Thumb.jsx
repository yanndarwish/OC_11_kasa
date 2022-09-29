import { Link } from "react-router-dom"

const Thumb = ({data}) => {
	const handleClick = () => {
		localStorage.setItem(data.id, JSON.stringify(data))
	}

	return (
		<Link to={`/housing/${data.id}`}>
			<article className="thumb main-theme flex" onClick={() => handleClick()}>
				<img src={data.pictures[0]} alt={`${data.title} thumb`} className="thumb-img" />
				<h2 className="thumb-title">{data.title}</h2>
			</article>
		</Link>
	)
}

export default Thumb
