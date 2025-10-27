import React, { useState, useRef } from 'react';

const Ex09 = () => {
    // 1. input 태그에 적은 내용이 계획 추가 버튼 클릭시, 배열에 저장(state)
    // 2. 저장된 배열 state를 map을 통해서 ul에 출력
    // 3. li에 달려있는 삭제 버튼을 클릭 했을 때, filter 함수를 사용해서
    //      해당 요소만을 지우고, 새롭게 배열을 만든다.

    // state 배열에 값 추가하는 방법! (스프레드 연산자 사용)
const [todos, setTodos] = useState([]);      // 할 일 목록 저장
  const [inputValue, setInputValue] = useState(''); // 입력창 내용
    // setMyList([...todos, '밥 먹기'])
    // TodoList에 작성한 값을 가져오기
    
    const addPlan = () => {
        setTodos([...todos,inputValue])
    }

    // todolist 삭제함수
    const delPlan = (delIndex) => {
        const newTodos = todos.filter((item, i) => i !== delIndex);
        setTodos(newTodos);
    }

  return (
    <div>
        <h1>2025 올해는 다르다</h1>
        <input type="text" value = {inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <button onClick={addPlan}>계획 추가</button>

        <h1>ToDoList</h1>
        <ul>
            {/* 이곳에 ToDolist가 들어간다 <li> 형태로 */}
            {todos.map((item, index) => (
                <li key={index}>
                {item}
                <button onClick={()=> delPlan(index)}>삭제</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Ex09