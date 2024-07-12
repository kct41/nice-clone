import $ from 'jquery';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import logo from "../img/img_logo.png";
import login from "../img/ico_login.png";
import menu from "../img/ico_menu.png";
import close from "../img/btn_menu_close.png";
import home from "../img/btn_menu_home.png";
import prev from "../img/ico_arr_prev.png";
import {NavLink} from "react-router-dom";

function MobNav() {
    function showMenu() {
        document.querySelector('.hidden_bg').classList.add('on');
        document.querySelector('.hidden_menu').classList.add('on');
    }

    function closeMenu() {
        document.querySelector('.hidden_bg').classList.remove('on');
        document.querySelector('.hidden_menu').classList.remove('on');
    }


    const mores = document.querySelectorAll('.more');
    const depths = document.querySelectorAll('.depth3');

    mores.forEach((more, index) => {
        more.addEventListener('click', function () {
            depths.forEach((depth, i) => {
                if (index === i) {
                    depth.classList.add('active');
                } else {
                    depth.classList.remove('active');
                }
            });
        });
    });


    return (
        <>
            <div className="header_mob">
                <NavLink to="/nice-clone">
                    <a href="#">
                        <img className="logo" src={logo}/>
                    </a>
                </NavLink>
                <div>
                    <NavLink to="/login">
                        <a href="#">
                            <img src={login}/>
                        </a>
                    </NavLink>
                    <a className="open_btn" href="#" onClick={showMenu}>
                        <img src={menu}/>
                    </a>
                </div>
            </div>
            <div className="hidden_menu">
                <div className="hidden_top">
                    <a className="home_btn" href="#">
                        <img src={home}/>
                    </a>
                    <a className="close_btn" href="#" onClick={closeMenu}>
                        <img src={close}/>
                    </a>
                </div>
                <div className="login">
                    <a href="#">
                        <p>로그인</p>
                        <img src={prev}/>
                    </a>
                </div>
                <div className="search">
                    <input type="text" placeholder="메뉴명 입력"></input>
                </div>
                <div className="quick_menu">
                    <ul>
                        <li className="quick_list on"><a href="#protect">지켜주는 금융생활</a></li>
                        <li className="quick_list"><a href="#grow">키워주는 신용생활</a></li>
                        <li className="quick_list"><a href="#smile">미소짓는 데이터생활</a></li>
                        <li className="quick_list"><a href="#settings">관리/설정</a></li>
                        <li className="quick_list"><a href="#center">고객센터</a></li>
                    </ul>
                </div>
                <div className="menu_list">
                    <span id="protect">지켜주는 금융생활</span>
                    <ul className="depth1">
                        <li className="d1_title">
                            <div className="depth2 more">
                                <a>모으다</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div>
                                <ul className="depth3">
                                    <li>소득 모아보기</li>
                                    <li>금융자산 모아보기</li>
                                    <li>주소 관리</li>
                                    <li>부동산 시세</li>
                                    <li>자동차 시세</li>
                                </ul>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div id="use" className="depth2 more">
                                <a>쓰다</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div>
                                <ul className="depth3">
                                    <li>소비현황</li>
                                    <li>내 또래와 소비 비교</li>
                                </ul>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div id="loan" className="depth2 more">
                                <a>빌리다</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div>
                                <ul className="depth3">
                                    <li>대출현황</li>
                                    <li>DSR 계산기</li>
                                    <li>대출한도예측</li>
                                    <li>내 또래와 대출 비교</li>
                                </ul>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2 more">
                                <a>갚다</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div>
                                <ul className="depth3">
                                    <li>카드/대출 연체방지</li>
                                    <li>연체현황</li>
                                    <li>채무조정내역</li>
                                </ul>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2 more">
                                <a>맞춤금융상품</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div>
                                <ul className="depth3">
                                    <li>맞춤대출</li>
                                    <li>맞춤카드</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="menu_list">
                    <span id="grow">키워주는 신용생활</span>
                    <ul className="depth1">
                        <li className="d1_title">
                            <div className="depth2">
                                <a>신용점수 확인하기</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>신용점수 예측하기</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>신용점수 올리기</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>사장님 신용관리</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>지키미케어십</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div id="loan" className="depth2 more">
                                <a>신용보고서</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div>
                                <ul className="depth3">
                                    <li>상품안내</li>
                                    <li>내 신용보고서 관리</li>
                                </ul>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>케어십알림</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>신용조회차단</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>명의도용차단</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="menu_list">
                    <span id="smile">미소짓는 데이터생활</span>
                    <ul className="depth1">
                        <li className="d1_title">
                            <div className="depth2">
                                <a>데이터 놀이터</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>마이데이터 연결</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>소비자 보호</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="menu_list">
                    <span id="settings">관리/설정</span>
                    <ul className="depth1">
                        <li className="d1_title">
                            <div className="depth2">
                                <a>결제/서비스 이용내역</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>지키미케어십 관리</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>이용권 등록</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2 more">
                                <a>내 정보 관리</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div>
                                <ul className="depth3">
                                    <li>내 정보 변경</li>
                                    <li>로그인 설정</li>
                                    <li>마케팅 알림설정</li>
                                    <li>가족구성원 동의</li>
                                    <li>약관 및 서비스 이용 동의</li>
                                    <li>회원탈퇴</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="menu_list">
                    <span id="center">고객센터</span>
                    <ul className="depth1">
                        <li className="d1_title">
                            <div className="depth2 more">
                                <a>문의하기</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div>
                                <ul className="depth3">
                                    <li>서비스 문의</li>
                                    <li>신용상담신청</li>
                                    <li>자주하는 질문</li>
                                    <li>타인알림문자 수신거절</li>
                                </ul>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2">
                                <a>공지사항</a>
                            </div>
                        </li>
                        <li className="d1_title">
                            <div className="depth2 more">
                                <a>이용안내</a>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div>
                                <ul className="depth3">
                                    <li>이용가이드</li>
                                    <li>약관 및 정책</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="hidden_bg"></div>
        </>
    )
}

export default MobNav;