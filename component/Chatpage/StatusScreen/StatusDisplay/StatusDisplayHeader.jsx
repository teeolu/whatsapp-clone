const StatusDisplayHeader = ({ user, onClick }) => {
  let userImage = user.picture ? user.picture.thumbnail : null;

  return (
    <div className="status_display-header clearfix">
      <div className="status_display-header-left">
        <div className="status_header-back-arrow" onClick={onClick}>&larr;</div>
        <div className="chat_list-item-left">
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
            style={{
              backgroundImage: `url(${userImage})`,
              height: "40px",
              width: "40px",
              borderRadius: "50%"
            }}
          ></div>
        </div>
        <div>
          {
            user.name ?
              <div className="chat_list-item-right">
                <p className="chat_list-name">{`${user.name.first} ${user.name.last}`}</p>
                <p className="chat_list-time">today at {(new Date()).getHours() + ":" + (new Date()).getMinutes()}</p>
              </div>
              :
              null
          }
        </div>
      </div>
    </div>
  )
}

export default StatusDisplayHeader;