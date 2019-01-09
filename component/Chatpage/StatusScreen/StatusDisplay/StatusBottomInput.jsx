const StatusBottomInput = () => {
  return (
    <div className="status_bottom-input">
      <div className="status_display-emoji">&#9786;</div>
      <input type="text" placeholder="Type your reply" className="status_display-text-input" />
      <div className="status_display-enter-icon">&#10147;</div>
    </div>
  );
}

export default StatusBottomInput;