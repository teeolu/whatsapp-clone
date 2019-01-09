import Head from "next/head";
import ChatPage from "../component/Chatpage";

class Chat extends React.Component {

    render() { 
        return ( 
            <div>
                <Head>
                    <link rel="stylesheet" href="/static/style.css"/>
                </Head>
                <ChatPage/>
            </div>
         );
    }
}
 
export default (Chat);