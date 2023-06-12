import nav1 from '../img/icon_navi_1.png';
import nav2 from '../img/icon_navi_2.png';
import nav3 from '../img/icon_navi_3.png';
import nav4 from '../img/icon_navi_4.png';
import navoh from '../img/icon_navi_oh.png';

function MobQuickNav() {
    return (
        <>
            <div className="mob_quickmenu">
                <ul>
                    <li>
                        <a>
                            <img src={nav1}/>
                            <p>자산</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={nav2}/>
                            <p>신용</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img className="oh" src={navoh}/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={nav3}/>
                            <p>대출</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={nav4}/>
                            <p>카드</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobQuickNav;