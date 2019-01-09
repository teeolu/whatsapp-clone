const ChatList = ({img, name, activeChat, cn, activeChatChat}) => {

    return ( 
			<li className={"user " + cn} onClick={activeChat} >
                <img className="user__image" src={img} />
                <div className="user_info-container">
                    <div className="user__info-right">
                        <p className="user__info-right-name">{name}</p>
                        <p className="user__info-right-msg">last message</p>
                    </div>
                    <div className="user__info-left">
                        <p className="user__chat-time">{(new Date()).getHours() + ":"+ (new Date()).getMinutes()}</p>
						<img className="user__info-left-img" src="/static/SVG/chevron-down.svg" alt="" srcset=""/>
                    </div>
                </div>
            </li>
     );
}
 
export default ChatList;