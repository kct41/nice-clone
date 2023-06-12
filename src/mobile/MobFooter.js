import call from '../img/icon_call.png';

function MobFooter() {
    return (
        <>
            <footer>
                <div className="privacy">
                    <a href="#">이용약관</a>
                    <a href="#">개인정보처리방침</a>
                </div>
                <div className="call">
                    <img src={call}/>
                    <p>1588-2486</p>
                </div>
                <p>서울특별시 영등포구 은행로 17 (여의도동 14-33)</p>
                <div className="flex">
                    <dl>
                        <dt>대표이사</dt>
                        <dd>신희부</dd>
                    </dl>
                    <dl>
                        <dt>사업자등록번호</dt>
                        <dd>116-81-15020</dd>
                    </dl>
                </div>
                <div className="flex">
                    <dl>
                        <dt>통신판매업신고번호</dt>
                        <dd>제2007-05725호</dd>
                    </dl>
                </div>
                <p>© NICE INFORMATION SERVICE CO., LTD</p>
            </footer>
        </>
    )
}

export default MobFooter;