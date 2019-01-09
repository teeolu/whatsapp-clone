const NoActiveChat = () => {
  return (
    <div className="no_active_chat">
      <div className="chat_screen-body">
        <div className="chat_screen-image-body"></div>
        <p className="connected">Keep your phone connected</p>
        <p className="brief_info">
          WhatsApp connects to your phone to sync messages.
          To reduce data usage, connect your phone to Wi-Fi.
      </p>
        <div className="nbsp">&nbsp;</div>
        <div className="whatsapp_available">
          <svg className="computer"></svg>
          <p className="available">WhatsApp is available for Windows. <span className="get_it_here">Get it here.</span></p>
        </div>
      </div>
    </div>
  );
}

export default NoActiveChat;