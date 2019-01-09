const StatusList = ({ className, handleStatusClick, user }) => {
	return (
		<div
			className={className}
			onClick={() => handleStatusClick()}
		>
			<div className="chat_list-item-left clearfix">
				<svg
					className="chat_list-item-svg"
					width="48"
					height="48"
					viewBox="0 0 104 104"
				>
					<circle
						className="svg-circle"
						cx="52"
						cy="52"
						r="50"
						fill="black"
						stroke-linecap="round"
						stroke-width="4"
						stroke-dashoffset="387.69908169872417"
					></circle>
				</svg>
				<div className="chats_status-img"
					style={
						{
							backgroundImage: `url(${user.picture.thumbnail})`,
							height: "40px",
							width: "40px",
							borderRadius: "50%"
						}
					}
				></div>
			</div>
			<div className="chat_list-item-right">
				<p className="chat_list-name">
					{`${user.name.first} ${user.name.last}`}
				</p>
				<p className="chat_list-time">
					today at {(new Date()).getHours() + ":" + (new Date()).getMinutes()}
				</p>
			</div>
		</div>
	);
}

export default StatusList;