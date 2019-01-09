const Header = ({ img, svgIcons, name, showStatusScreen }) => {
	return (
		<div className="chat_header">
			<div className="chat_header_name_image">
				<img
					className="header_image"
					src={img}
					alt={name + " image"}
				/>
				<p>{name}</p>
			</div>
			<div className="chat_header-chatlist">
				<ul className="header_svg-icon-container">
					{svgIcons.map((svgIcon, i) => (
						<li>
							<img
								onClick={svgIcon === "spinner10" ? () => showStatusScreen() : () => null}
								className="header_svg-icon" key={i} src={`/static/SVG/${svgIcon}.svg`}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Header;