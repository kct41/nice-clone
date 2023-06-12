import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

function QuickMenu() {
    return (
        <>
            <div className="main_quick">
                <ul>
                    <li className="on">
                        <a href="#mydata">마이데이터</a>
                        <br/>
                        <FontAwesomeIcon className="icon" icon={faChevronRight}/>
                    </li>
                    <li>
                        <a href="#recommend">맞춤 추천</a>
                        <br/>
                        <FontAwesomeIcon className="icon" icon={faChevronRight}/>
                    </li>
                    <li>
                        <a href="#service">지키미서비스</a>
                        <br/>
                        <FontAwesomeIcon className="icon" icon={faChevronRight}/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default QuickMenu;