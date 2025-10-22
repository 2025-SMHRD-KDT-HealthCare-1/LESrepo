import React from 'react'

const MyDate = () => {

    // 현재 시간 가져오기
  let day = new Date();
  console.log(day)

  let myYear = day.getFullYear();
  let myMonth = day.getMonth()+1;
  let myDay = day.getDate();
  // 이름 입력 프롬프트
  let name = prompt("이름을 입력해주세요.");
 
  // 계절 계산기
  let season =''
  if(3<=myMonth && myMonth<=5){
    season = '봄'
  }
  else if(6<=myMonth && myMonth<=8){
    season = '여름'
  }
  else if(9<=myMonth && myMonth<=11){
    season = '가을'
  }
  else{
    season = '겨울'
  }
  return (
    <div>
        <h1>{myYear}년{myMonth}월{myDay}일</h1>
        <hr></hr>
        <p>{name}님 지금은 {season}입니다. 좋은 하루 보내세요.</p>
    </div>
  )
}

export default MyDate