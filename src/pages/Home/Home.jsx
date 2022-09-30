// components
import datas from "../../data/data"
import Banner from "../../components/Banner"
import Thumb from "../../components/Thumb"

function Home() {
	return (
		<div className="Home">
			<Banner />
			<section className="home-main-container">
				{datas.map((value) => (
					<Thumb key={`${value.id}`} data={value} />
				))}
			</section>
		</div>
	)
}

export default Home
