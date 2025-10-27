import { useState } from 'react'


const Ex08 = () => {
    const [index,setIndex] = useState(0)
    const imgArr = [
    './src/img/poke1.png',
    './src/img/poke2.jpg',
    './src/img/poke3.png'
    ]

    const nextImg = () => {
        if(index ==2){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }
        

    }
    const beforeImg = () => {
        if(index == 0){
            setIndex(2)
        }
        else{
            setIndex(index-1)
        }
    }
  return (
    <div>
        <img src={imgArr[index]}></img>
        <button onClick={beforeImg}>이전</button>
        <button onClick={nextImg}>다음</button>
    </div>
  )
}

export default Ex08