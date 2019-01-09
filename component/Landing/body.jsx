import Top from "./BodyTop/Top";
import Bottom from "./Bottom/Bottom";

class Body extends React.Component {
    render() { 
        return ( 
            <div className="body">
                <div className="header">
                    <span>
                        <img 
                            className="headerlogo" 
                            src="/static/whatsapp.png" 
                            alt="Whatsapp logo"
                        />
                    </span>
                    <div className="header__text">WhatsApp web</div>
                </div>
                <div className="main">
                    <Top />
                    <Bottom />
                </div>
            </div>
         );
    }
}
 
export default Body;