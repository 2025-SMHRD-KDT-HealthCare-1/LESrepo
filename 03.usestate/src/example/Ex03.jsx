import React, { useState } from 'react'

const Ex03 = () => {

  const [choiceNum, setChoiceNum] = useState(0)
  const [ranNum, setRanNum] = useState(0)
  const [result, setResult] = useState("")

  // 클릭된 버튼의 숫자를 매개변수로 받기
  const btnClick = (num) => {
    setChoiceNum(num)

    const comNum = Math.floor(Math.random() * 3) + 1
    setRanNum(comNum)

    if (comNum == num) {
      setResult("정답입니다!")
    } else {
      setResult("땡! ")
    }
  }



  return (

    <div>
        <button onClick={() => btnClick(1)}>1</button>
        <button onClick={() => btnClick(2)}>2</button>
        <button onClick={() => btnClick(3)}>3</button>

        <div>
            <p>내가 입력한 숫자 : {choiceNum}</p>
            <p>컴퓨터 랜덤 숫자 : {ranNum}</p>
            <p>결과 : {result}</p>
        </div>
    </div>
  )
}

export default Ex03