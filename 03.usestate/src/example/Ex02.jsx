import React, {useState} from 'react'
import pic from '../img/image1.webp'

const Ex02 = () => {
  // useState의 초기값에는 다양한 데이터 자료형태가 가능
  const [likeEmoji,setLikeEmoji] = useState("♡")
  const [likeNum, setLikeNum] = useState(0)

  // 빈 하트 클릭 시, 채워진 하트로 변경
  // 빈 하트 클릭 시, 숫자 0을 1로 변경
  // 채워진 하트 클릭 시, 빈하트로 변경
  // 채워진 하트 클릭시 숫자 1을 0으로 변경
  const handleLike = ()=>{
    // 클릭했을때 비어있는 하트일때 채워진 하트로, 좋아요 1증가
    if(likeEmoji=="♡"){
      setLikeEmoji("♥")
      setLikeNum(likeNum+1)
    }
    // 클릭했을때 채워진 하트일때 비어있는 하트로, 좋아요 1감소
    else{
      setLikeEmoji("♡")
      setLikeNum(likeNum-1)
    }
  }


  return (
    <div style={{marginLeft: "300px"}}>
      {/* src 폴더 내 접근 */}
      {/* import 이미지변수 from '경로' */}
      <img width="300px" src= {pic}></img>
      <br></br>
      {/* 외부 주소값 접근  */}
      <img width="300px" src= "https://t1.daumcdn.net/brunch/service/user/cnoC/image/Lc-6Nyq5qvRh6Aadda7a1mxqsO8"></img>
      <br></br>
      {/* publc 폴더에 이미지가 있다면?
        http://localhost:5173/img/image2.webp
        public폴더는 서버와 통신 중 -> 이곳에 저장하는 것만으로 고유한 주소값 생성
      */}
      <img width="300px" src='/img/image2.webp'></img>
      <br></br>
      <p>
          <span onClick={handleLike}>{likeEmoji}</span>
          <span>{" "} 좋아요 {likeNum}개</span>
      </p>
    </div>
  )
}

export default Ex02