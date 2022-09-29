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

export default Tags
