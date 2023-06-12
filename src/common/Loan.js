import MobSwiper from "../mobile/MobSwiper";
import $ from 'jquery';
import {useState, useEffect} from "react";
import LoanCard from "./LoanCard";
import Loading from "./Loading";

export default function Loan() {


    $(".accor_btn").on("click", function () {
        $('.accor_btn::after').css("transform", "rotate(180deg)");
    })

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    function getData() {
        fetch("http://localhost:1337/api/board")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network not ok');
            }) //받아온 데이터를 json 형식으로 변환
            .then((json) => {
                setPosts(json);
                setLoading(false);
            }).catch((error) => {
            console.log(`error: ${error}`);
        });
    }

    useEffect(getData,[]);


    return (
        <>
            {loading ? <Loading/> : null}
            <div className="loan">
                <div className="title">
                    <p><span>신용부터 담보까지</span><br/>
                        다양한 대출 상품을<br/>
                        진단받아 보세요.</p>
                </div>
                <div className="gradient_box">
                    <p>내 신용점수로 신청할 수 있는
                        대출이 알고 싶다면?</p>
                </div>
                <MobSwiper/>
                <div className="filter">
                    <button className="active" data-value="all">전체</button>
                    <button data-value="credit">신용</button>
                    <button data-value="house">주택담보</button>
                    <button data-value="car">자동차</button>
                </div>
                <div id="wrap">
                    {posts.map((post) => (
                        <LoanCard key={post.no} src={post.src} title={post.title} sub={post.sub} sub_num={post.sub_num}
                                  sub_num2={post.sub_num2} law={post.law}/>
                    ))}
                </div>
                <div className="select_box">
                    <a className="select s1">
                        <span>높은 한도, 낮은 금리</span><br/>
                        <strong>원하는 대출을 한눈에 비교</strong>
                    </a>
                    <a className="select s2">
                        <span>대출 한도가 걱정된다면?</span><br/>
                        <strong>신용점수를 올려보세요!</strong>
                    </a>
                </div>
                <div className="accor_container">
                    <button className="accor_btn">
                        <span>꼭 알아두세요!</span>
                    </button>
                    <div className="accord_cont">
                        <ul>
                            <li>실제 대출심사 및 신청은 각 금융회사에서 진행되며, 상품이나 금리가 변경되어 안내될 수 있습니다.</li>
                            <li>대출진단 제휴를 희망하는 금융사는 제휴 문의 부탁드립니다.(이메일: mydata2@nice.co.kr)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}