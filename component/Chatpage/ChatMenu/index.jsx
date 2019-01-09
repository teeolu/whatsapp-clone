import ChatList from "./ChatList";
import Header from "../../utils/Header";

class ChatMenu extends React.Component {

	showActiveChat = user => {
		this.props.activeChat(user);
	}

	renderChats = () => {
		let {users} = this.props;

		if(users) {
			return users.map((user, i) => (
				<ChatList key={i}
					cn={this.props.user.login ? this.props.user.login.uuid === user.login.uuid ? "active-chat" : "" : ""}
					activeChat={ () => this.props.activeChat(user)} 
					img={user.picture.thumbnail}
					name={`${user.name.first} ${user.name.last}`}
				/>
			))
		} else {
			return (
				<div>loading</div>
			)
		}
	}

  render() { 
  	return ( 
			<div className="chat_menu">
				<div className="chat_menu-top">
					<Header 
						img={"/static/images/imag1_1.jpg"} 
						showStatusScreen={this.props.showStatusScreen} 
						svgIcons={["spinner10", "message", "menu"]} 
						name=""
					/>
					<form className="chat_menu-search-bar">
						<img src="/static/SVG/search.svg"/>
						<input 
							className="chat_menu-search-bar-input" 
							placeholder="Search or start new chat" 
							type="text"
						/>
					</form>
				</div>
				<ul className="chat__list">
					{this.renderChats()}
				</ul>
			</div>
		);
  }
}
 
export default (ChatMenu);