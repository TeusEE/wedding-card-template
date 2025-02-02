import wedding from './assets/wedding.png'
import mymap from './assets/mymap.png'
import Transport from './Transport'

const Navi = () => {
    return (
        <>
            <h1>Location</h1>
            <img src = {wedding} width={"35%"} style = {{marginTop : "2%"}}></img>
            <img src = {mymap} width={"90%"}></img><br/>
            주소 : 서울시 강남구 역삼로 607(대치동)<br/><br/>
            <Transport
                tr_type = "bus"
            />
            <Transport
                tr_type = "car"
            />
            <Transport
                tr_type = "metro"
            />
        </>
    )
}

export default Navi;