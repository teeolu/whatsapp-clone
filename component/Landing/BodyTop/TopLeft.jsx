import React, { Component } from 'react';

class TopLeft extends Component {
  state = {  }
  render() { 
    return ( 
      <div div className="top__left">
        <p className="top__left-heading">To use WhatsApp on your computer:</p>
        <ol className="top__left-list">
          <li className="top__left-list-item">Open WhatsApp on your phone</li>
          <li className="top__left-list-item">Tap <span className="strong">Menu</span> {" "}
            <span className="top__left-list-svg">
              <svg height="24px" viewBox="0 0 24 24" width="24px">
                <use href="/static/SVG/sprite.svg#menu"></use>
              </svg>
            </span>
            or <span className="strong">Settings</span> {" "}
            <span className="top__left-list-svg">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="/static/SVG/sprite.svg#settings"></use>
              </svg>
            </span> {" "} and select <span className="strong"> WhatsApp Web</span>
          </li>
          <li className="top__left-list-item">
            Point your phone to this screen to capture the code
          </li>
        </ol>
      </div>
    );
  }
}
 
export default TopLeft;