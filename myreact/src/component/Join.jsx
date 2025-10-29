import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// useNavigate : 주소값을 바꿔서 다른 컴포넌트를 띄울 수 있는 기능
import { useRef, useState } from 'react'

const Join = () => {

  // nav : 주소값을 바꿀 수 있는 변수로 사용 가능
  const nav = useNavigate();

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputNick, setInputNick] = useState('');

  // ID, PW, NICK 값을 전부 입력했을 때만 페이지 이동 하고 싶어요!
  const btnJoin=()=>{
    // 사용자가 입력한 ID, PW, NICK값을 가져와 주세요

    if(inputId != '' && inputPw != '' &&inputNick !=''){
      // Login 페이지로 이동
      nav('/login')
    }
    else{
      alert("필수 항목을 입력해주세요")
    }
  }

  return (
    <div>
        <h1>즐거운 React 수업</h1>
        <h3>회원가입 페이지 입니다</h3>
        <form>
          {/* e : event 객체
              -> 이벤트에 따른 모든 정보가 담겨있다(어던 태그로 발생 됐는지, 어떤 이벤트로 발생 됐는지)
              e.target : 이벤트를 발생시킨 주체(태그) 
           */}
            <p>ID : <input onChange={(e)=>setInputId(e.target.value)} /></p>
            <p>PW : <input onChange={(e)=>setInputPw(e.target.value)} type='password'  /></p>
            <p>NICK : <input onChange={(e)=>setInputNick(e.target.value)}  /></p>
            <button onClick={btnJoin}>join</button>
            {/* <Link to='/login'><button style={{borderColor: "black"}}>join</button></Link> */}
            <button style={{borderColor: "black"}}>초기화</button>
        </form>
    </div>
  )
}

export default Join