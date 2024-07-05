import {Swiper, SwiperSlide} from "swiper/react";
import bg1 from "../img/bg_mainBan_01.png";
import bg2 from "../img/bg_mainBan_02.png";
import bg3 from "../img/bg_mainBan_03.png";
import bg4 from "../img/bg_mainBan_04.png";
import bg5 from "../img/bg_mainBan_05.png";

function WebFlip() {
    return (
        <>
            <Swiper
                spaceBetween={20}
                centeredSlides={false}
                className="swiper_flip"
                slidesPerView="5"
            >
                <SwiperSlide className="flip-card">
                    <div className="flip-card-inner red">
                        <div className="flip-card-front">
                            <img src={bg1}/>
                            <p>OK저축은행 신용대출</p>
                            <p>내 대출한도가<br/>도착했습니다!</p>
                        </div>
                        <div className="flip-card-back">
                            <p>지금 조회하기</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flip-card">
                    <div className="flip-card-inner blue">
                        <div className="flip-card-front">
                            <img src={bg2}/>
                            <p>현대캐피탈 자동차담보대출</p>
                            <p>중고차, 할부차도<br/>대출 신청 가능!</p>
                        </div>
                        <div className="flip-card-back">
                            <p>최대 한도<br/>
                                6,000 만원
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flip-card">
                    <div className="flip-card-inner purple">
                        <div className="flip-card-front">
                            <img src={bg3}/>
                            <p>맞춤형 대출상품</p>
                            <p>내 신용점수로<br/>대출진단 받기</p>
                        </div>
                        <div className="flip-card-back">
                            <p>신용부터<br/>
                                담보까지 진단
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flip-card">
                    <div className="flip-card-inner sky">
                        <div className="flip-card-front">
                            <img src={bg4}/>
                            <p>부동산 담보대출</p>
                            <p>아파트나 빌라<br/>소유자 주목!</p>
                        </div>
                        <div className="flip-card-back">
                            <p>뱅크몰<br/>
                                제공</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flip-card">
                    <div className="flip-card-inner yellow">
                        <div className="flip-card-front">
                            <img src={bg5}/>
                            <p>다이렉트 자동차보험</p>
                            <p>견적만 받아도~<br/>가입하면 한번 더!</p>
                        </div>
                        <div className="flip-card-back">
                            <p>주유상품권<br/>
                                증정</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default WebFlip;