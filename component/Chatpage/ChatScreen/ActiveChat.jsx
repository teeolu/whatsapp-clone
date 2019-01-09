import Header from "../../utils/Header";

const ActiveChat = ({ user }) => {
  return (
    <div className="active_chat">
      <Header
        img={user.picture.thumbnail}
        svgIcons={["search", "attachment", "menu"]}
        name={`${user.name.first} ${user.name.last}`}
      />
      <div>
        <form className="chat-screen-message-box">
          <img src="/static/SVG/emoji-happy.svg" alt="" className="mesage_icon" />
          <input placeholder="Type your message" type="text" />
          <img src="/static/SVG/mic.svg" alt="" className="mesage_icon" />
        </form>
      </div>
    </div>
  );
}

export default ActiveChat;