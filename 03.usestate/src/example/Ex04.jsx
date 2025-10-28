import React, { useState, useRef, useEffect } from 'react';

const Ex04 = () => {
  const [inputText, setInputText] = useState(0);
  const [ranNum,setRanNum] = useState(parseInt(Math.random() * 50) + 1);
  const [result, setResult] = useState("");
  const inputRef = useRef();
  const [chance, setChance] = useState(10)
  console.log(ranNum)
  const btnClick = () => {
    // 1. 입력값 가져오기
    const text = parseInt(inputRef.current.value);

    // 2. 값 입력
    setInputText(text);

    // 3. 비교하기
    if (text != ranNum) {
      setChance(chance-1)
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
    // 4. 
    useEffect(()=>{
      if(chance == 0){
        alert("기회 끝")
      }
    },[chance])



  return (
    <div>
      <h1>1 ~ 50 랜덤수 맞추기</h1>
      <p>기회 : {chance}</p>
      <input ref={inputRef}></input>
      <button onClick={btnClick}>추측</button>
      <p>
        hint : {result}
      </p>
    </div>
  )
  
}

export default Ex04;