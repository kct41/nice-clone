import '../src/web/web.css';
import WebNav from "./web/WebNav";
import WebCont from "./web/WebCont";
import WebFooter from "./web/WebFooter";
import {BrowserRouter as Router} from 'react-router-dom';

function Web() {
    return (
        <>
            <div className="web">
                <Router>
                    <WebNav/>
                    <WebCont/>
                    <WebFooter/>
                </Router>
            </div>
        </>
    )
}

export default Web;