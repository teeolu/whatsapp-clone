import StatusList from "./StatusList";
import StatusDisplay from "./StatusDisplay";
import OwnersStatus from "./OwnersStatus";

class StatusScreen extends React.Component {
	state = {
		activeStatus: {},
		displayStatus: "hide"
	}

	handleStatusClick = (user) => {
		this.setState({
			activeStatus: user,
			displayStatus: "unhide"
		});
	}

	hideDisplayStatus = () => {
		this.setState({
			displayStatus: "hide"
		})
	}

	renderStatus = () => {
		return this.props.users.map((user, i) => (
			<StatusList
				key={i}
				className="chat_list-item"
				handleStatusClick={() => this.handleStatusClick(user)}
				user={user}
			/>
		))
	}

	render() {
		const owner = {
			picture: {
				thumbnail: "/static/images/imag1_1.jpg",
				large: "/static/images/imag1_1.jpg"
			},
			name: {
				first: "My",
				last: "status"
			}
		}

		return (
			<div className="status-screen_container">
				<div className={this.props.statusScreenClass}>
					<div className="status_screen-left">
						<div className="status_screen-left-top">
							<div className="owner_status-img">
								<StatusList
									className="chat_list-item"
									handleStatusClick={() => this.handleStatusClick(owner)}
									user={owner}
								/>
							</div>
						</div>
						<div className="status_screen-left-list">
							<p>RECENT</p>
							{this.renderStatus()}
						</div>
					</div>
					<OwnersStatus 
						handleStatusClick={() => this.handleStatusClick(owner)} 
						cancelStatusScreen={this.props.changeStatusScreenClass} 
					/>
				</div>
				<StatusDisplay
					user={this.state.activeStatus}
					ClassName={this.state.displayStatus}
					cancelStatusScreen={this.hideDisplayStatus}
				/>
			</div>
		);
	}
}

export default StatusScreen;