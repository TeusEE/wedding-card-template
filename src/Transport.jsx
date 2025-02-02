const Transport  = ({tr_type}) => {
    var rev_tr_type = tr_type
    var contents = "";
    if (tr_type ==="bus") {
        rev_tr_type = "버스"
        contents = `간선버스(파랑색)<br/>
143, 146, 341, 360, 401<br/>
지선버스(녹색)<br/>
2413, 3411, 3422, 4318, 11-3<br/>
광역버스(빨강색)<br/>
9407, 6900`
    } else if (tr_type === "metro") {
        rev_tr_type = "지하철"
        contents = `지하철 2호선 삼성역 1번출구<br/>
1번 출구 : 셔틀버스 항시 대기<br/> 
2번 출구 : 도보(5분 정도 소요)`
    } else if (tr_type === "car") {
        rev_tr_type = "자동차"
        contents = `올림픽 잠실 방향 / 영동대교 지나 3차선으로 차선 변경<br/> 
잠실운동장 조금 못가서 빠져나와 GS칼텍스 주유소 /<br/> 
강남경찰서 / 강남운전면허시험장 30M 직진`
    }
    
    return  (
    <div>
        <div style = {{fontSize : "16px"}}>
            {rev_tr_type}로 오시는 분들
        </div>
        <div style = {{fontSize : "12px"}}>
            <div dangerouslySetInnerHTML={{ __html: contents }} />
        </div>
        <br/>
    </div>
)}

export default Transport 