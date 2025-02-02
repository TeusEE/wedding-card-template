import { useState } from "react";
import Modal from "./modal";
import MyBank from "./Bank";

const Account = () => {
    const [bank_modal, set_bank_modal] = useState({isopen:false, src:null});
    
    return (
        <>
            <p style = {{
            fontSize:"20px",
            fontFamily:"MaruBuri",
            margin:"20px"
            }}>마음 전하실 곳
            </p>
            <div onClick = {()=>{set_bank_modal({isopen:true, src:"M"});document.body.classList.add('modal-open')}}
                style = {{
                backgroundColor:"rgb(242,238,238)",
                padding:"12px",
                margin:"12px",
                marginLeft:"20%",
                marginRight:"20%"
            }}>신랑측 계좌번호</div>
            <div onClick = {()=>{set_bank_modal({isopen:true, src:"W"});document.body.classList.add('modal-open')}}
                style = {{
                backgroundColor:"rgb(242,238,238)",
                padding:"12px",
                margin:"12px",
                marginLeft:"20%",
                marginRight:"20%"
            }}>신부측 계좌번호</div>
            <Modal
            isOpen={bank_modal}
            onClose={() => {set_bank_modal({isopen:false, src:null});document.body.classList.remove('modal-open')}}
            mystyle = {{backgroundColor:"rgb(255, 246, 246)"}}
            >
            <div style = {{display:"flex", justifyContent:"center"}}>
                <MyBank src ={bank_modal.src}/>
            </div>  
            </Modal>
        </>
    )
}
export default Account