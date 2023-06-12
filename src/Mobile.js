import './mobile/mobile.css';
import MobNav from "./mobile/MobNav";
import MobCont from "./mobile/MobCont";
import MobFooter from "./mobile/MobFooter";
import MobQuickNav from "./mobile/MobQuickNav";
import {BrowserRouter as Router} from "react-router-dom";

function Mobile() {
    return (
        <>
            <div className="mobile">
                <Router>
                    <MobNav/>
                    <MobCont/>
                </Router>
            </div>
        </>
    )
}

export default Mobile;