const OwnersStatus = ({ cancelStatusScreen, handleStatusClick }) => {
  return (
    <div className="status_screen-right">
      <div className="cancel_status-screen" onClick={cancelStatusScreen} >X</div>
      <div className="status_screen-wrap">
        <div className="status_screen-right-container">
          <p className="owners_status-text">View your updates</p>
          <div className="owners_status-image" onClick={handleStatusClick}>
          </div>
          <div className="owners_status-views">91</div>
          <div className="owners_status-time">yesterday at 11:51</div>
        </div>
      </div>
    </div>
  );
}

export default OwnersStatus;