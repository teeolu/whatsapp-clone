import React, { Component } from 'react';

class EndVideoIcon extends Component {
  state = {
    videoEnd: "hide"
  }

  replayHandler = () => {
    let video = document.getElementById("bottom_video");

    video.play();

    this.setState({
      videoEnd: "hide"
    })
  }

  onEndVideo = () => {
    this.setState({
      videoEnd: "bottom__icon"
    })
  }

  render() {

    return (
      <div>
        <video
          autoPlay
          id="bottom_video"
          className="bottom_image"
          onEnded={this.onEndVideo}
          controls
          controlsList="nodownload"
        >
          <source src="/static/whatsapp.mp4" type="video/mp4" />
        </video>
        <div className={this.state.videoEnd}>
          <span className="bottom__icon-button" onClick={this.replayHandler}>
            <div className="bottom__icon-svg">
              <svg width="48" height="48" fill="#fff" viewBox="0 0 48 48">
                <use href="/static/SVG/sprite.svg#reload"></use>
              </svg>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default EndVideoIcon;