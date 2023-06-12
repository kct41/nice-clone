import './common.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import credit from '../img/bg_creditbefore.png';
import tip from '../img/bg_main_tip.png';
import care from '../img/bg_care.png';
import family from '../img/bnr_privacy_mob.png';

function Style() {
    return (
        <>
            <div className="style">
                <div className="nice">
                    <p>나이스한<br/>신용스타일</p>
                    <img src={credit}/>
                </div>
                <div className="gradient_box">
                    <p>내 신용점수는 어떤 스타일?</p>
                    <span>지금 바로 알아보기</span>
                </div>
                <div className="bubble">
                    <p>지키미가 드리는 더욱 새로워진 케어 서비스!</p>
                </div>
                <img className="tip" src={tip}/>
                <div className="care">
                    <div>
                        <img src={care}/>
                        <div>
                            <p>나의 소중한 신용정보를</p>
                            <p>안전하게 케어 받으세요</p>
                        </div>
                    </div>
                    <FontAwesomeIcon className="icon" icon={faChevronRight}/>
                </div>
                <img className="family mob" src={family}/>
            </div>
        </>
    )
}

export default Style;