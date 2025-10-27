import React from 'react'

const Ex05map = () => {
    // 배열 데이터를 생성 -> 객체 데이터가 들어가져있는 상태
    let students = [
        { name : '홍길동', age : 30, bloodType : 'A'},
        { name : '고길동', age : 50, bloodType : 'AB'},
        { name : '둘리', age : 10, bloodType: 'A'}
    ]

    let food = ['마라탕', '분식', '도시락']

    let numList = [1,2,3,4,5]

    // 1. map 함수 : 기존 배열을 이용해서 새로운 배열을 만드는 배열 함수(JS 내장)
    //            : 기존 배열.map(콜백함수)
    // 2. filter 함수 : 기존 배열에서 조건을 이용해서 조건이 true면 유지, 
    //                  false면 버려서 새로운 배열을 만드는 배열 함수
    //               : 기존배열.filter(콜백 함수)
    // 3. map 함수와 filter함수 동시에 사용
    //              : 기존배열.filter(조건 함수).map(콜백 함수)

    // 1). filter 함수 사용
    const filteredList = numList.filter(num => num %2 === 0);
    console.log(filteredList)
  return (
    <div>
        <h3>Case 1 : 객체의 값을 하나씩 출력</h3>
        <p>안녕하세요 제 이름은 {students[0].name}입니다. 저는 {students[0].bloodType}형이고, {students[0].age}살입니다.</p>
        <p>안녕하세요 제 이름은 {students[1].name}입니다. 저는 {students[1].bloodType}형이고, {students[1].age}살입니다.</p>
        <p>안녕하세요 제 이름은 {students[2].name}입니다. 저는 {students[2].bloodType}형이고, {students[2].age}살입니다.</p>
        
        <h3>Case 2 : map 함수를 통해서 출력</h3>
        {/* map : 기존의 배열을 가져와서 결과를 반복 처리하여 새로운 배열을 반환 */}
        {students.map((item) => (
            <p key = {item.name}>
                안녕하세요 제 이름은 {item.name}입니다. 
                저는 {item.bloodType}형이고, 
                {item.age}살입니다.
            </p>
        ))}
        <h3>Case 3 : map함수 실습</h3>
        {food.map((item) => (
            <button key = {item}>{item}</button>
        ))}

        {/* numList 변수를 map함수를 통해서 -> button요소로 만들기
          -> 2,4,6,8,10으로 숫자를 바꿔서 버튼을 만들기
        */}
        <h3>Case 3-2 : map함수 실습</h3>
        {numList.map((item) => (
            <button key = {item}>{item*2}</button>
        ))}

        <h3>Case 4 : filter 함수 실습</h3>
        {/*
            1. numList배열을 map함수를 통해서 => 버튼 요소로 만들기
                -> 1,2,3,4,5 상태로 버튼 만들기
            2. 새롭게 만들어진 1,2,3,4,5 버튼 중에서 짝수만 filter 함수를 이용해
               화면에 출력 
        */}

        {/*
            * map, filter에 들어가는 콜백 함수의 형태
            (요소, 인덱스, 배열(주로 생략)) => {
                return 반환값
            }
                * 인덱스와 배열의 경우 생략이 가능하다
                * 컴포넌트의 key를 고유값으로 사용하기 위해서 index를 쓰는 것은 가능하나,
                  권장되지 않는다! (배열의 index는 요소의 추가/삭제로 변동이 가능)
        */}
        {
        numList
        .filter(
            (num => num %2 ===0)
        )
        .map(
            (num, index) => <button key = {index}>{num}</button>
        )        
        }
    </div>
  )
}

export default Ex05map