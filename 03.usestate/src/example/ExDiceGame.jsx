import React, { useState, useRef } from 'react';

const ExDiceGame = () => {
    const diceArr = [
        './src/img/dice1.png',
        './src/img/dice2.png',
        './src/img/dice3.png',
        './src/img/dice4.png',
        './src/img/dice5.png',
        './src/img/dice6.png'
    ];
    const [ranNum1, setRanNum] = useState(0);
    const [ranNum2, setRanNum2] = useState(0);
    const [result, setResult] = useState('')
    const [comScore, setComScore] = useState(0)
    const [userScore, setUserScore] = useState(0)
    const btnClick = () => {
        const mRanNum1 = parseInt(Math.random() * 6);
        const mRanNum2 = parseInt(Math.random() * 6);

        setRanNum(mRanNum1);
        setRanNum2(mRanNum2);


        const nextCom = comScore + (mRanNum1 > mRanNum2 ? 1 : 0);
        const nextUser = userScore + (mRanNum2 > mRanNum1 ? 1 : 0);

        setComScore(nextCom);
        setUserScore(nextUser);

        if (nextCom >= 10) {
        setResult('Com 승리');
        } 
        else if (nextUser >= 10) {
        setResult('User 승리');
        }    
    }

    
  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={btnClick}>Start</button>

      <div >
        <img src={diceArr[ranNum1]}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div >
        <img src={diceArr[ranNum2]}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  )
}

export default ExDiceGame