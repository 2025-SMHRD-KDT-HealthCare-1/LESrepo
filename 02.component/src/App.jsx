import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'
import Member from './Member'

function App() {
  const [count, setCount] = useState(0)

  let temp = 'Ice'

  // 객체 비구조 할당
  let student = {
    name : '임승환',
    age : 20,
    sub : 'web'
  }

  console.log(student)

  let { name, age, sub} = student
  console.log(name, age, sub)

  return (
    <>
      <Menu temp={temp} menu="아메리카노" price='4100'></Menu>
      {/* 2번째 메뉴 */}
      <Menu temp={temp} menu="카페라떼" price='4600'></Menu>
      <Menu menu="에이드" price='5000'></Menu>
      <hr></hr>
      <Member prog='의섭팀' name='임의섭'></Member>
      <Member prog='의섭팀' name='김영민'></Member>
      <Member prog='의섭팀' name='한준서'></Member>
      <Member prog='의섭팀' name='윤세호'></Member>
    </>
  )
}

export default App
