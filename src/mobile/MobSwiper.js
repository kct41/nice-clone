import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper";

import banner1 from '../img/kb_mywish_banner.png';
import banner2 from '../img/bnk_m_banner.png';
import banner3 from '../img/ok_new_banner.png';

export default function MobSwiper() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="swiper_rec"
            >
                <SwiperSlide>
                    <div>
                        <div className="left">
                            <p>나 위시, 혜택에 진심인 편</p>
                            <p>15만원 쓰면</p>
                            <p><strong>그대로 돌려드려요!</strong></p>
                        </div>
                        <div className="right">
                            <img src={banner1}/>
                        </div>
                    </div>
                    <p>준법감시인 심의필 230220-00494-ETC</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="left">
                            <p>BNK경남은행 모바일신용대출</p>
                            <p>최저 연 4.51%</p>
                            <p>(기준:23.3.16, 1억원, 1년, 내부AS1등급)</p>
                        </div>
                        <div className="right">
                            <img src={banner2}/>
                        </div>
                    </div>
                    <p>준법감시인 심의필 2023-H-570</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="left">
                            <p>OK저축은행 개인신용대출</p>
                            <p>내 대출한도가 도착했습니다 (1)</p>
                            <a> 지금 조회하기 > </a>
                        </div>
                        <div className="right">
                            <img src={banner3}/>
                        </div>
                    </div>
                    <p>저축은행중앙회 심의필 2022-00468 (2022.04.12~2023.04.11)</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}