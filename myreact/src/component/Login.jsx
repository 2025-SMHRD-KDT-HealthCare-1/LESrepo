import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom' // 페이지 이동관련은 router
import { useSearchParams } from 'react-router-dom'

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [query, setQuery] = useSearchParams()
  const nav = useNavigate();
  const id = query.get('id')
  const pw = query.get('pw')
  const nick = query.get('nick')
  console.log(id)

  const btnLogin = () =>{
    if(inputId == id && inputPw == pw){
      nav(`/?nick=${nick}`)
    }
    else{
      alert('아이디 혹은 비밀번호가 잘못 입력되었습니다')
    }
    }
  return (
    <div>
        <h1>즐거운 React 수업</h1>
        <p>ID : <input onChange={(e)=>{setInputId(e.target.value)}}></input></p>
        <p>PW : <input onChange={(e)=>{setInputPw(e.target.value)}}></input></p>
        <button onClick={btnLogin}>로그인 시도</button>
        {/* <Link to='/'><button style={{borderColor: "black"}}>로그인 시도</button></Link> */}
    </div>
  )
}

export default Login