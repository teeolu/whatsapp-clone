import CircularProgress from '@material-ui/core/CircularProgress';

const MainLoader = ({mainLoaderClass}) => {
  return ( 
    <div>
      <img className="bottom_image" src="/static/image-1.jpg" alt="" />
      <div className="bottom__main-loader">
        <div className="">
          <div className={mainLoaderClass}>
            <CircularProgress style={{ color: '#53BCA6' }} size={70} thickness={3} />
          </div>
        </div>
      </div>
    </div> 
  );
}
 
export default MainLoader;