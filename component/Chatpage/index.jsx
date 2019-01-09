import ChatScreen from "./ChatScreen";
import ChatMenu from "./ChatMenu";
import StatusScreen from "./StatusScreen";

class ChatPage extends React.Component {
  state = {
    users: [],
    activeChat: {},
    statusScreenClass: "hide"
  }

  updateStatusScreenClass = (ClassName) => {
    this.setState({
      statusScreenClass: ClassName
    })
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=15")
      .then(response => response.json())
      .then(resp => this.setState({ users: resp.results }))
  }

  updateActiveChat = (user) => {
    this.setState({
      activeChat: user
    })
  }

  render() {
    const { users, activeChat, statusScreenClass, } = this.state;

    return (
      <div>
        <div className={statusScreenClass === "status_screen" ? "hide" : "chatpage"}>
          <ChatMenu
            users={users}
            user={activeChat}
            showStatusScreen={() => this.updateStatusScreenClass("status_screen")}
            activeChat={(user) => this.updateActiveChat(user)}
          />
          <ChatScreen user={activeChat} />
        </div>
        <StatusScreen
          changeStatusScreenClass={() => this.updateStatusScreenClass("hide")}
          statusScreenClass={statusScreenClass}
          users={users}
          user={activeChat}
        />
      </div>
    );
  }
}

export default ChatPage;