import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { useEffect, useRef, useState } from 'react';
import Audiocomp from './Audiocomp'
import Topmsg from './Topmsg';
import Mainphoto from './Mainphoto';
import Invitation from './Invitation';
import Calendar from './Calendar';
import Gallery from './Gallery';

function App() {
  const debug = process.env.NODE_ENV === 'development'?"solid":"none";
  
  


  return (
    <>
      <div className='main-frame'>
        <div style={{ border: debug, textAlign: 'right' }}>
          <Audiocomp/>
        </div>
        <div className = "fade-in" style={{ border: debug}}>
          <Topmsg/>
        </div>
        <div className = "fade-in" style={{ border: debug}}>
          <Mainphoto/>
        </div>
        <div className = "fade-in" style={{ border: debug}}>
          <Invitation/>
        </div>
        <div className = "fade-in" style={{ border: debug}}>
          <Calendar/>
        </div>
        <div className = "fade-in" style={{ border: debug}}>
          <Gallery/>
        </div>
        <div className = "fade-in" style={{ border: debug}}>
          결혼식 장소
        </div>
        <div className = "fade-in" style={{ border: debug}}>
          신랑신부 계좌 정보
        </div>
        <div className = "fade-in" style={{ border: debug}}>
          카카오톡 공유하기 / 모청 주소 복사하기
        </div>
      </div>
    </>
  )
}

export default App
