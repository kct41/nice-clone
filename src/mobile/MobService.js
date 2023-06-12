import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import bg1 from '../img/bg_service_1.png';
import bg2 from '../img/bg_service_2.png';
import bg3 from '../img/bg_service_3.png';
import bg4 from '../img/bg_service_4.png';
import bg5 from '../img/bg_service_5.png';


export default function MobService() {
    return (
        <>
            <div className="service" id="service">
                <p>이런 서비스는 어떠세요?</p>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView="1.2"
                    modules={[Pagination]}
                    className="swiper_ser"
                >
                    <SwiperSlide>
                        <div>
                            <p>중요한 순간, 나를 증명해야 할 때</p>
                            <p>신용보고서</p>
                            <p>(개인/커플/사업자)</p>
                        </div>
                        <img src={bg1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p>미래의 내 신용점수는 몇 점일까</p>
                            <p>신용점수 예측하기</p>
                        </div>
                        <img src={bg2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p>나도 모르게 내 정보가 새지 않게!</p>
                            <p>신용조회 차단</p>
                        </div>
                        <img src={bg3}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p>휴대전화, 아이핀 등 도용을 예방해요</p>
                            <p>본인인증 차단</p>
                        </div>
                        <img src={bg4}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p>내 사업장 신용관리가 필요할 때</p>
                            <p>사장님 신용관리</p>
                        </div>
                        <img src={bg5}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}