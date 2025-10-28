import React, { useEffect, useState } from 'react'
// useEffect는 맨처음(Mount), 화면 변경(Update) 단계에서 실행되는 기능

const FunctionComponent = () => {
    // 1. 생성자를 대체 (state, 변수, 함수 선언 등)
    //      : 화면을 구성하기 위한 준비물을 선언
    console.log("1. constructor대체")
    const [num,setNum] = useState(0);

    // 3. 화면 Mount 대체
    // useeffect(콜백함수, 빈배열)
    // 2번째 인자값으로 받는 의존성 배열을 비워두면, componentDidMount의 역할을 대체!
    // API Call, 무거운 데이터, 타이머 기능 등
    useEffect(()=> {
        console.log("3. 화면 Mount 완료!")

        const timer = setInterval(()=>{
            setNum(prev=> prev+1)
        },1000)

        // 5. 화면 Unmount 대체
        // useEffect(콜백함수, 빈배열) => 콜백함수의 return 문에 함수의 형태로 실행
        // componentWillUnmount의 역할을 대체
        // cleanup 함수의 역할을 수행
        return () => {
            clearInterval(timer);
            console.log("5. 컴포넌트 Unmount 대체");
        }
    },[]);

        
    // 4. 값 update 대체
    // useEffect(콜백 함수, [변화를 감지할 변수]);
    //  - 첫 렌더링 때에도 실행된다는 특징이 존재(componentDIdUpdate와의 차이)
    //  - 변화를 감지하는 대상은 복수가 될 수 없다. ( 의존성 배열에 추가)
    useEffect(()=>{
        console.log("4. 값 update 완료!")

        if(num == 10){
            alert('목표숫자 도달')
        }

    },[num])
    
    const haldleIncrement = () => {
        setNum(num+1);

    }
    

    const handleDecrement = () => {
        setNum(num-1)
    }

  return (
    // 2. render 함수를 대체
    <div>
        {console.log("2. render 대체")}
        <h1>Counter {num}</h1>
        <button onClick={haldleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default FunctionComponent