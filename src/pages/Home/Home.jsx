// dependencies
import { useState, useEffect } from "react"
// components
import datas from "../../data/data"
import Banner from "../../components/Banner"
import Thumb from "../../components/Thumb"

function Home() {
	const [data, setData] = useState([])

	useEffect(() => {
		setData(datas)
	}, [])

	return (
		<div className="Home">
			<Banner />
			<section className="home-main-container">
				{data &&
					data.map((value) => <Thumb key={`${value.id}`} data={value} />)}
			</section>
		</div>
	)
}

export default Home
