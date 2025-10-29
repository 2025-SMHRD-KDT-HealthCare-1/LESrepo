import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const nav = useNavigate();

  const btnLogin = () =>{
    if(inputId == 'smhrd' && inputPw == '123'){
      nav('/')
    }
    else{
      alert('아이디 혹은 비밀번호가 잘못 입력되었습니다')
    }
    }
  return (
    <div>
        <h1>즐거운 React 수업</h1>
        <p>ID : <input onChange={(e)=>{setInputId(e.target.value)}}/></p>
        <p>PW : <input onChange={(e)=>{setInputPw(e.target.value)}}/></p>
        <button onClick={btnLogin}>로그인 시도</button>
        {/* <Link to='/'><button style={{borderColor: "black"}}>로그인 시도</button></Link> */}
    </div>
  )
}

export default Login