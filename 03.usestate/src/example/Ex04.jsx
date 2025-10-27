import React, { useState, useRef } from 'react';

const Ex04 = () => {
  const [inputText, setInputText] = useState(0);
  const [ranNum,setRanNum] = useState(parseInt(Math.random() * 50) + 1);
  const [result, setResult] = useState("");
  const inputRef = useRef();
  console.log(ranNum)
  const btnClick = () => {
    // 1. 입력값 가져오기
    const text = parseInt(inputRef.current.value);

    // 2. 값 입력
    setInputText(text);

    // 3. 비교하기
    if (text !== ranNum) {
      if (text > ranNum) {
        setResult(`${text}보다 작습니다!`);
      } 
      else {
        setResult(`${text}보다 큽니다!`);
      }
    } 
    else {
      setResult("정답입니다!");
    }
  }
  return (
    <div>
      <h1>1 ~ 50 랜덤수 맞추기</h1>
      <input ref={inputRef}></input>
      <button onClick={btnClick}>추측</button>
      <p>
        hint : {result}
      </p>
    </div>
  )
}

export default Ex04;