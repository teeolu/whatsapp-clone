import StatusDisplayHeader from './StatusDisplayHeader';
import StatusBottomInput from './StatusBottomInput';

const StatusDisplay = ({ user, ClassName, cancelStatusScreen }) => {
	let userImage = user.picture ? user.picture.thumbnail : null;
	let userImage1 = user.picture ? user.picture.large : null;

	return (
		<div

			className={ClassName}
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0, .4), rgba(0, 0, 0, .4)),url(${userImage})`,
				zIndex: "15",
				height: "100vh",
				width: "100%",
				position: "absolute",
				top: 0,
				left: 0,
				backgroundPosition: "center",
				backgroundSize: "cover"
			}}
		>
			<div className="cancel_status-screen" onClick={cancelStatusScreen} >X</div>
			<div className="status_display-header">
				<StatusDisplayHeader user={user} onClick={cancelStatusScreen}/>
			</div>
			<div className="status_display-image-container">
				<img className="status_display-image" src={userImage1} />
			</div>
			<StatusBottomInput />
		</div>
	);
}

export default StatusDisplay;