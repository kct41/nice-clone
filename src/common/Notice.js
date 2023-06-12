import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import notice from '../img/icon_notice_title.png';

function Notice() {
    return (
        <>
            <div className="notice">
                <a href="#">
                    <img src={notice}/>
                    <p>알려드려요</p>
                    <FontAwesomeIcon className="icon" icon={faChevronRight}/>
                </a>
                <div className="list">
                    <div className="title">
                        <p>시스템 정기점검으로 인한 서비스 이용제한 웅앵웅앵aaaa</p>
                    </div>
                    <div className="date">
                        <p>2023.03.27</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notice;