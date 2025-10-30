import React from 'react'
import { useSearchParams } from 'react-router-dom'

// useSearchParams : 주소값에 있는 쿼리 스트링 데이터를 꺼내 사용할 수 잇는 기능

const About = () => {

  const [query, setQuery] = useSearchParams()
  // query : 쿼리스트링으로 보낸 데이터
  // .get('key값')
  console.log(query.get('num'))
  return (
    <div>
        <h1>About {query.get('num')}번째 Page 입니다</h1>
    </div>
  )
}

export default About