import btn from '../img/btn_page_top.png';
import $ from 'jquery';
import MobHome from "./MobHome";
import Loan from "../common/Loan";
import Login from "../common/Login";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";

function MobCont() {


    $("#btn_top").click(function (e) {
        $('html,body').scrollTop(0);
        e.preventDefault();
    });


    return (
        <>
            <div className="content">
                <Routes>
                    <Route index path="/" element={<MobHome/>}/>
                    <Route path="/loan" element={<Loan/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
                {/*<a href="javascript:false;" id="btn_top">*/}
                {/*    <img src={btn}/>*/}
                {/*</a>*/}
            </div>
        </>
    )
}

export default MobCont;