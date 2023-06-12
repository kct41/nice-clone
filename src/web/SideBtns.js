import icon1 from '../img/icon_quick_1.png';
import icon2 from '../img/icon_quick_2.png';
import icon3 from '../img/icon_quick_3.png';
import icon4 from '../img/icon_quick_4.png';
import icon5 from '../img/icon_quick_5.png';
import icon6 from '../img/icon_quick_8.png';

export default function SideBtns(){
    return(
        <>
            <div className="btn_container">
                <div className="item">
                    <img src={icon1}/>
                    <p>모으다</p>
                </div>
                <div className="item">
                    <img src={icon2}/>
                    <p>쓰다</p>
                </div>
                <div className="item">
                    <img src={icon3}/>
                    <p>빌리다</p>
                </div>
                <div className="item">
                    <img src={icon4}/>
                    <p>맞춤대출</p>
                </div>
                <div className="item">
                    <img src={icon5}/>
                    <p>맞춤카드</p>
                </div>
                <div className="item">
                    <img src={icon6}/>
                    <p>개인신용<br/>평점체계</p>
                </div>
            </div>
        </>
    )
}

