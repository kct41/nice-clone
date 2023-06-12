import nice from '../img/footer_nice.png';
import wa from '../img/footer_a11y.png';
function WebFooter() {
    return (
        <>
            <div className="footer_web">
                <div className="footer">
                    <div className="flex_container">
                        <ul className="info">
                            <li>
                                <a>회사소개</a>
                            </li>
                            <li>
                                <a>개인정보처리방침</a>
                            </li>
                            <li>
                                <a>이용약관</a>
                            </li>
                            <li>
                                <a>개인신용평점체계공시</a>
                            </li>
                            <li>
                                <a>저작권 정책</a>
                            </li>
                            <li>
                                <a>사이트맵</a>
                            </li>
                        </ul>
                        <div className="info2">
                            <dl>
                                <dt>NICE평가정보(주)</dt>
                                <dd>서울특별시 영등포구 은행로 17 (여의도동 14-33)</dd>
                            </dl>
                            <dl>
                                <dt>대표이사</dt>
                                <dd>신희부</dd>
                            </dl>
                        </div>
                        <div className="info2">
                            <dl>
                                <dt>사업자등록번호</dt>
                                <dd>116-81-15020</dd>
                            </dl>
                            <dl>
                                <dt>통신판매업신고번호</dt>
                                <dd>제2007-05725호</dd>
                            </dl>
                        </div>
                        <p>COPYRIGHT© NICE INFORMATION SERVICE RESERVED.</p>
                    </div>
                    <div className="contact">
                        <div className="call">
                            <p>고객 센터</p>
                            <p>1588-2486</p>
                        </div>
                        <p>webmaster@credit.co.kr</p>
                        <div className="img_container">
                            <img src={nice}/>
                            <img src={wa}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebFooter;