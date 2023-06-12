import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import links1 from '../img/icon_links_1.png';
import links2 from '../img/icon_links_2.png';
import links3 from '../img/icon_links_3.png';
import links4 from '../img/icon_links_4.png';

function MyData(){
    return(
        <>
            <div className="mydata" id="mydata">
                <p>신용관리를 도와주는<br/>
                나이스한 마이데이터</p>
                <div className="data_list">
                    <div className="data_save">
                        <div>
                            <img src={links1}/>
                            <p>모으고</p>
                        </div>
                        <a href="#">
                            <p>얼마나 모았을까?</p>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </a>
                    </div>
                    <div className="data_save">
                        <div>
                            <img src={links2}/>
                            <p>쓰고</p>
                        </div>
                        <a href="#">
                            <p>얼마나 썼을까?</p>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </a>
                    </div>
                    <div className="data_save">
                        <div>
                            <img src={links3}/>
                            <p>빌리고</p>
                        </div>
                        <a href="#">
                            <p>얼마나 빌렸을까?</p>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </a>
                    </div>
                    <div className="data_save">
                        <div>
                            <img src={links4}/>
                            <p>갚고</p>
                        </div>
                        <a href="#">
                            <p>얼마나 갚아야 할까?</p>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyData;