import { QRCode } from "react-qr-svg";
import uuid from "uuid";
import Link from "next/link";
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';

class QrcodeImage extends Component {
  state = {
    QRvalue: uuid(),
    faintQrcode: false,
    mainLoader: true
  }

  generateQrcode = () => {
    let QRvalue = uuid();

    this.setState({
      QRvalue
    })
  }

  reloadGenerateQrcode = () => {
    this.setState({
      faintQrcode: false,
      mainLoader: true
    })

    setTimeout(() => {
      this.setState({
        mainLoader: false
      })
    }, 2000)

    this.runGenerateQrcode();
  }

  componentDidMount() {
    setTimeout(this.runGenerateQrcode(), 30000)
  }

  componentWillUnmount() {
    clearInterval(this.setInterval1)
  }

  runGenerateQrcode = () => {
    let setInterval1 = setInterval(this.generateQrcode, 30000);

    setTimeout(() => {
      this.setState({
        mainLoader: false
      })
    }, 2000)

    setTimeout(setInterval1, 30000)

    setTimeout(() => {
      clearInterval(setInterval1);
      this.setState({ faintQrcode: true })
    }, 119990
    )
  }

  render() {
    return (
      <div className="top__right">
        <div className={this.state.mainLoader ? "hide" : ""}>
          <Link>
            <a href="/chat">
              <QRCode
                className={this.state.faintQrcode ? "qrcode_img-opaque" : ""}
                bgColor="#fff"
                fgColor="#000"
                level="Q"
                style={{}}
                value={this.state.QRvalue}
              />
            </a>
          </Link>
          <div className="whatsapp">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="/static/SVG/sprite.svg#icon-whatsapp"></use>
            </svg>
          </div>
        </div>

        <div className={this.state.mainLoader ? "main_loader unhide" : "hide"}>
          <CircularProgress style={{ color: '#53BCA6' }} size={70} thickness={3} />
        </div>

        <div className={this.state.faintQrcode ? "unhide" : "hide"}>
          <div className="reload_circle">
            <div className="reload_circle-content">
              <span
                
                style={{ marginBottom: "1rem", alignSelf: "center" }}
              >
                <use href="/static/SVG/sprite.svg#reload"></use>
              </span>
              <span 
                className="reload_circle-content-text"
                onClick={this.reloadGenerateQrcode}
              >
                CLICK TO RELOAD QR CODE
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QrcodeImage;