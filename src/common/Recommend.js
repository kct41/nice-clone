import MobSwiper from "../mobile/MobSwiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {NavLink, Link} from "react-router-dom";

function Recommend() {

    return (
        <>
            <div className="recommend" id="recommend">
                <p>내 신용점수로 받아보는<br/>
                    나이스한 맞춤추천</p>
                <div className="card_container">
                    <div className="card blue">
                        <Link to="/loan">
                            <p><strong>가장 좋은 조건</strong>의<br/>
                                대출을 받으세요</p>
                        </Link>
                    </div>
                    <div className="card purple">
                        <Link to="/loan">
                            <p><strong>소비습관</strong>에 맞는<br/>
                                카드로 바꾸세요</p>
                        </Link>
                    </div>
                </div>
                <MobSwiper/>
            </div>
        </>
    )
}

export default Recommend;