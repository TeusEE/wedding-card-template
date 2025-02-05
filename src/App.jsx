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
import Navi from './Navi';
import Account from './Account';
import Intersect from './Intersect';

function App() {
  const debug = process.env.NODE_ENV === 'development'?"solid":"none";
  return (
    <>
      <div className='main-frame'>
        <div style={{ border: debug, textAlign: 'right' }}>
          <Audiocomp/>
        </div>
        <Intersect className = "fade-in" style={{ border: debug}}>
          <Topmsg/>
        </Intersect>
        <Intersect className = "fade-in" style={{ border: debug}}>
          <Mainphoto/>
        </Intersect>
        <Intersect className = "fade-in" style={{ border: debug}}>
          <Invitation/>
        </Intersect>
        <Intersect className = "fade-in" style={{ border: debug}}>
          <Calendar/>
        </Intersect>
        <Intersect className = "fade-in" style={{ border: debug}}>
          <Gallery/>
        </Intersect>
        <Intersect className = "fade-in" style={{ border: debug}}>
          <Navi/>
        </Intersect>
        <Intersect className = "fade-in" style={{ border: debug}}>
          <Account/>
        </Intersect>
        <Intersect className = "fade-in" style={{ border: debug}}>
          카카오톡 공유하기 / 모청 주소 복사하기
        </Intersect>
      </div>
    </>
  )
}

export default App
