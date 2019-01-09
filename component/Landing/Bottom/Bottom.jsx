import BottomImage from './BottomImage';
import MainLoader from './MainLoader';
import EndVideoIcon from './EndVideoIcon';

class Bottom extends React.Component {
	state = {
		toggleClass: true,
		mainLoader: true
	}

	onClickHandler = () => {
		this.setState({
			toggleClass: this.state.toggleClass ? false : true
		})

		setTimeout(() => {
			this.setState({
				mainLoader: false,
			})
		}, 2000)
	}

	render() {
		let show = this.state.toggleClass;
		let mainLoader = this.state.mainLoader;

		return (
			<div className="bottom">
				<div>
					{
						show ?
								<BottomImage 
									onClick={this.onClickHandler} 
								/>
							: 
								mainLoader ?
									<MainLoader 
										mainLoaderClass={this.state.mainLoader ? "main_loader" : "hide"} 
									/>
								:
									<EndVideoIcon />
					}

				</div>
			</div>
		);
	}
}

export default Bottom;