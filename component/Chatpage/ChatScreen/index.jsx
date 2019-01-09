import NoActiveChat from "./NoActiveChat";
import ActiveChat from "./ActiveChat";

const ChatScreen = ({ user }) => {
	return (
		<div className="chat_screen">
			{
				!user.gender ?
					<NoActiveChat />
				:
					<ActiveChat user={user} />
			}
		</div>
	);
}

export default ChatScreen;