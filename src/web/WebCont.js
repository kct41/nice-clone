import btn from "../img/btn_page_top.png";
import $ from "jquery";
import WebHome from "./WebHome";
import Loan from "../common/Loan";
import Login from "../common/Login";
import Web from "../Web";
import {Routes,Route} from 'react-router-dom';

function WebCont() {

    $("#btn_top").click(function (e) {
        $('html,body').scrollTop(0);
        e.preventDefault();
    });

    return (
        <>
            <div className="web_content">
                <Routes>
                    <Route path="/nice-clone" element={<WebHome/>}/>
                    <Route path="/loan" element={<Loan/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
                <a href="javascript:false;" id="btn_top">
                    <img src={btn}/>
                </a>
            </div>
        </>
    )
}

export default WebCont;