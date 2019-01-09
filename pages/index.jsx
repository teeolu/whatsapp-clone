import Head from "next/head";
import Body from "../component/Landing/body";

class Index extends React.Component {

    render() { 

        return ( 
            <div>
                <div className="app">
                    <Head> 
                        <link rel="stylesheet" href="/static/style.css" />
                        <meta charSet="UTF-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                    </Head>
                    <div className="container"></div>
                </div>
                <Body />
            </div>
         );
    }
}
 
export default Index;