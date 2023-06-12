export default function Login() {
    return (
        <>
            <div className="login">
                <form>
                    <label>아이디</label><br/>
                    <input placeholder="아이디 입력"/><br/>
                    <div>
                        <label>비밀번호</label><br/>
                        <input placeholder="비밀번호 입력"/>
                    </div>
                    <button>로그인</button>
                </form>
                <div className="logLink">
                    <a className="after"><span>아이디/비밀번호 찾기</span></a>
                    <a><span>회원가입</span></a>
                </div>
                <div className="snsLoginBox">
                    <a className="naver"></a>
                    <a className="kakao"></a>
                </div>
                <div className="btn_box">
                    <a>공동인증서로 로그인하기 ></a>
                </div>
            </div>
        </>
    )
}