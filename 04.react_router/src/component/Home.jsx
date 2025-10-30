import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  // 쿼리스트링 : 주소값에 데이터를 담아서 요청보내는 방법
  //            - 주소값에 key=value 구조로 데이터를 담아서 요청을 보낸다!
  //            - &기호를 통해 Key=Value 쌍을 구분할 수 있다.
  return (
    <div>
        <h1>Home Page 입니다</h1>
        {/* <a href="/about">about 이동</a> */}
        <br></br>
        {/* 리액트에서는 a태그보다 Link 
        컴포넌트 사용을 권장한다 */}
        <Link to='/about?num=1'><button>about 링크</button></Link>
    </div>
  )
}

export default Home