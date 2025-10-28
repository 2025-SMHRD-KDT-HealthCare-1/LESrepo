import React from 'react'

const Join = () => {
  return (
    <div>
        <h1>즐거운 React 수업</h1>
        <h1>회원가입 페이지 입니다</h1>
        <form>
            <p>ID : <input type="text" /></p>
            <p>PW : <input type="text" /></p>
            <p>NICK : <input type="text" /></p>
            <button>join</button>
            <button>초기화</button>
        </form>
    </div>
  )
}

export default Join