import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home Page 입니다</h1>
        <Link to='/login'><button style={{borderColor: "black"}}>로그인</button></Link>
        <Link to='/join'><button style={{borderColor: "black"}}>회원가입</button></Link>
    </div>
  )
}

export default Home