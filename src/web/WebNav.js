import logo from '../img/img_logo.png';
import search from '../img/btn_menu_search_pc.png';
import {NavLink} from "react-router-dom";
import $ from 'jquery';

function WebNav() {

    // function addClass() {
    //     const btn = document.querySelector('.header_web .gnb .lower > ul > li');
    //     const hiddenMenu = document.querySelector('.header_web .gnb .lower > ul > li .submenu');
    //     btn.classList.add('active');
    //     hiddenMenu.classList.add('active');
    // }


    // $(".menu").click(function () {
    //     const a = $(".menu").index(this);
    //     $(".submenu").eq(a).slideDown(400);
    // });

    const menus = document.querySelectorAll('.menu');
    const submenus = document.querySelectorAll('.submenu');
    const lis = document.querySelectorAll('.header_web .gnb .lower > ul > li')

    menus.forEach((menu, index) => {
        menu.addEventListener('mouseover', function() {
            submenus.forEach((submenu, i) => {
                lis.forEach((li, i) => {
                    if (index === i) {
                        li.classList.add('active');
                    } else {
                        li.classList.remove('active');
                    }
                });

                submenus.forEach((submenu, i) => {
                    if (index === i) {
                        submenu.classList.add('active');
                    } else {
                        submenu.classList.remove('active');
                    }
                });
            });
        });
    });

    return (
        <>
            <div className="header_web">
                <div className="gnb">
                    <div className="upper">
                        <NavLink to="/login">
                            <a href="#">로그인</a>
                        </NavLink>
                        <a href="#">회원가입</a>
                    </div>
                    <div className="lower">
                        <NavLink to="/">
                            <a className="main_logo" href="#">
                                <img src={logo}/>
                            </a>
                        </NavLink>
                        <ul>
                            <li className="">
                                <a className="menu">지켜주는 금융생활</a>
                                <div className="submenu">
                                    <div className="submenu_list">
                                        <div className="box">
                                            <h3>모으다</h3>
                                            <ul>
                                                <li>소득 모아보기</li>
                                                <li>금융자산 모아보기</li>
                                                <li>주소 관리</li>
                                                <li>부동산 시세</li>
                                                <li>자동차 시세</li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h3>쓰다</h3>
                                            <ul>
                                                <li>소비현황</li>
                                                <li>내 또래와 소비 비교</li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h3>빌리다</h3>
                                            <ul>
                                                <li>대출현황</li>
                                                <li>DSR 계산기</li>
                                                <li>대출한도예측</li>
                                                <li>내 또래와 대출 비교</li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h3>갚다</h3>
                                            <ul>
                                                <li>카드/대출 연체방지</li>
                                                <li>연체현황</li>
                                                <li>채무조정내역</li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h3>맞춤금융상품</h3>
                                            <ul>
                                                <li>맞춤대출
                                                    <ul>
                                                        <li>대출진단</li>
                                                    </ul>
                                                </li>
                                                <li>맞춤카드
                                                    <ul>
                                                        <li>카드추천</li>
                                                        <li>카드진단</li>
                                                        <li>카드찾기</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="menu">키워주는 신용생활</a>
                                <div className="submenu">
                                    <div className="submenu_list">
                                        <div className="box">
                                            <h3 className="noline">신용점수 확인하기</h3>
                                            <h3 className="noline">신용점수 예측하기</h3>
                                        </div>
                                        <div className="box">
                                            <h3 className="noline">신용점수 올리기</h3>
                                            <h3 className="noline">사장님 신용관리</h3>
                                        </div>
                                        <div className="box">
                                            <h3 className="noline">지키미 케어십</h3>
                                            <h3 className="noline">신용보고서</h3>
                                            <ul>
                                                <li>상품안내</li>
                                                <li>내 신용보고서 관리</li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h3 className="noline">케어십알림</h3>
                                            <h3 className="noline">신용조회차단</h3>
                                            <h3 className="noline">명의도용차단</h3>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="menu">미소짓는 데이터생활</a>
                                <div className="submenu">
                                    <div className="submenu_list">
                                        <div className="box">
                                            <h3>데이터놀이터</h3>
                                            <ul>
                                                <li>이름어때
                                                    <ul>
                                                        <li>이름분석</li>
                                                        <li>이름랭킹</li>
                                                        <li>이름추천</li>
                                                    </ul>
                                                </li>
                                                <li>펫케어
                                                    <ul>
                                                        <li>반려동물 등록</li>
                                                        <li>나이계산기</li>
                                                        <li>이름추천</li>
                                                        <li>이름랭킹</li>
                                                        <li>색상랭킹</li>
                                                    </ul>
                                                </li>
                                                <li>나이스실험실</li>
                                                <li>이벤트</li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h3 className="noline">동네상권데이터</h3>
                                            <h3>마이데이터 연결</h3>
                                            <ul>
                                                <li>마이데이터 연결관리</li>
                                                <li>금융사 연결관리</li>
                                                <li>개인신용정보 전송내역</li>
                                                <li>마이데이터 해지</li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h3>빌리다</h3>
                                            <ul>
                                                <li>신용정보 이용제공내역</li>
                                                <li>개인신용정보 조회사실통지요청</li>
                                                <li>자동화평가결과 설명요구</li>
                                                <li>개인신용평점체계</li>
                                                <li>개인사업자신용등급체계</li>
                                                <li>법원/관보정보</li>
                                                <li>채권자 변동정보</li>
                                                <li>개인회생 신청정보</li>
                                                <li>연체정보 해제이력</li>
                                                <li>공공정보</li>
                                                <li>금융질서문란정보</li>
                                                <li>제휴사 신용관리 이용내역</li>
                                                <li>무료 비회원 신용조회</li>
                                                <li>금융소비자보호</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="menu">관리/설정</a>
                                <div className="submenu">
                                    <div className="submenu_list">
                                        <div className="box">
                                            <h3 className="noline">결제/서비스 이용내역</h3>
                                            <h3 className="noline">지키미케어십 관리</h3>
                                            <h3 className="noline">이용권 등록</h3>
                                        </div>
                                        <div className="box">
                                            <h3>내 정보 관리</h3>
                                            <ul>
                                                <li>내 정보 변경</li>
                                                <li>로그인 설정</li>
                                                <li>마케팅 알림설정</li>
                                                <li>가족구성원 동의</li>
                                                <li>약관 및 서비스 이용 동의</li>
                                                <li>회원탈퇴</li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h3 className="noline">공동인증서 관리</h3>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="menu">고객센터</a>
                                <div className="submenu">
                                    <div className="submenu_list">
                                        <div className="box">
                                            <h3>문의하기</h3>
                                            <ul>
                                                <li>서비스문의</li>
                                                <li>신용상담신청</li>
                                                <li>자주하는 질문</li>
                                                <li>타인알림문자 수신거절</li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h3 className="noline">공지사항</h3>
                                        </div>
                                        <div className="box">
                                            <h3>이용안내</h3>
                                            <ul>
                                                <li>이용가이드</li>
                                                <li>보안프로그램 설치안내</li>
                                                <li>원격지원안내</li>
                                                <li>약관 및 정책</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <a className="search_btn menu" href="#">
                            <img src={search}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebNav;