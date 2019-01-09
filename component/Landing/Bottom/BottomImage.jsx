const BottomImage = ({onClick}) => {
  return (
    <div>
      <img className="bottom_image" src="/static/image-1.jpg" alt="" />
      <div className="bottom__icon">
        <span className="bottom__icon-button" onClick={onClick}>
          <div className="bottom__icon-svg">
            <svg width="28" height="34" viewBox="0 0 28 34">
              <use href="/static/SVG/sprite.svg#icon-controller-play"></use>
            </svg>
          </div>
        </span>
      </div>
    </div>
  );
}

export default BottomImage;