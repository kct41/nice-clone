export default function LoanCard({src, title, sub, sub_num, sub_num2, law}) {
    return (
        <>
            <a data-group="all credit" href="#11">
                <img src={src}/>
                <p className="a_title">{title}</p>
                <p className="a_info">{sub}</p>
                {sub_num === null ? null :
                    <div className="flex">
                        <div>
                            <span>연 금리</span>
                            <p>{sub_num}</p>
                        </div>
                        <div>
                            <span>최대 한도</span>
                            <p>{sub_num2}</p>
                        </div>
                    </div>
                }

                <p className="sm">{law}</p>
            </a>
        </>
    )
}
