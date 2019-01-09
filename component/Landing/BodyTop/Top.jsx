import TopLeft from "./TopLeft";
import QrcodeImage from "./QRImage";

class Top extends React.Component {
	render() {
		return (
			<div className="top">
				<TopLeft />
				<QrcodeImage />
				<div className="top__help-link">
					<a href="https://faq.whatsapp.com/faq/web/28080003/" target="_blank">
						Need help to get started?
            </a>
				</div>
				<div className="top__checkbox">
					<label>
						<input
							type="checkbox"
							defaultChecked
							name="rememberMe"
						/>
						Keep me signed in
          </label>
				</div>
			</div>
		);
	}
}

export default Top;