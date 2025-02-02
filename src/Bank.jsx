import copyicon from './assets/copy.svg'
const MyBank  = ({src}) => {
    //복사하기 버튼이 동작할 수 있게 함수를 준비해둠
    const copy_bank = (num) => {
        navigator.clipboard.writeText(num)
        alert("계좌가 복사되었습니다.")
    }

    const dt = src === "W" ? {
        //신부측의 계좌정보
        "mother" : ["부버지","국민은행", "11111111111111"],
        "father" : ["부모니","신한은행", "22222222222222"],
        "me" : ["신부님","수협은행", "33333333333333"],
    } : {
        //신랑측의 계좌정보
        "mother" :  ["랑머니","국민은행", "11111111111111"],
        "father" : ["랑버지","신한은행", "22222222222222"],
        "me" : ["신랑님","국민은행", "33333333333333"]
    } 
    return  (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        {
            ["mother", "father", "me"].map((key, idx) => {
                return <div key = {idx}
                style = {{
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    textAlign:"left",
                    borderRadius:"12px",
                    padding:"12px",
                    margin:"12px", 
                }}>
                    <div>
                        <p style = {{fontFamily : "MaruBuriLight", fontSize : "18px", marginTop: "0px"}}>{dt[key][0]}</p>
                        {dt[key][1]} {dt[key][2]}
                    </div>
                    <div style = {{width : "3vw"}}></div>
                    <button
                        onClick={()=>copy_bank(dt[key][2])}
                        style = {{
                            backgroundColor : "rgb(249, 246, 242)",
                            color : "black",
                            border : "1px solid rgb(197, 219, 238)",//
                            padding : "6px",
                            borderRadius : "5px"
                        }}
                    >
                        <img src = {copyicon} width={"12px"}></img>
                        <span style = {{marginLeft : "10px", marginRight:"5px"}}>복사</span>
                    </button>
                </div>
            })
        }
    </div>
)}

export default MyBank 