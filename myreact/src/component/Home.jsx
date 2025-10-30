import React from 'react'
import {Link} from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [query, setQuery] = useSearchParams()
  return (
    <div>
        <h1>Home Page 입니다</h1>
        <h1>{query.get('nick')}님 안녕하세요</h1>
        <Link to='/login'><button>로그인</button></Link>
        <Link to='/join'><button>회원가입</button></Link>
    </div>
  )
}

export default Home