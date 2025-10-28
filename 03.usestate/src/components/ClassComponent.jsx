import React, { Component } from 'react'

// rec 단축기
export class ClassComponent extends Component {
    /* (Alt+Shift+A)
        Class Component 
        - React에는 Class 컴포넌트와 Function 컴포넌트가 존재
        - 두 컴포넌트 모두 사용이 가능하지만, 현재는 Function 컴포넌트가 대세
        - state, LifeCycle의 개념은 초기에 Function 컴포넌트에는 존재하지 않았다!
        - React Hook이 등장하면서 해당 기능들도 Function 컴포넌트에서 사요잉 가능!
        - React Hook : use~로 시작되는 기능들(class 컴포넌트에서 쓰던 기능을 Function 컴포넌트에서도 쓸 수 있게 나중에 추가된 기능)
    */

    // 1. 생성자 : 최초 생성
    //  => state관리, 변수 선언, 함수 선언, 화면을 구성하기 위한 초기 데이터 관리
    constructor(props) {
        console.log("1. constructor")

        // 상속의 개념(상위 클래스의 생성자를 상속)
        super(props);

        // 상태관리
        this.state = {
            num: 0
        }
    

        // Class Component의 method에 this 바인딩
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    }

    // 3. ComponentDidMount
    //      : 화면이 렌더링된 직후 실행
    //      : API Call, 무거운 데이터, 타이머 기능 등
    //      : 사용자들은 조금이라도 화면이 먼저 뜨면 '빠르다'라고 느낌
    //      : 그렇기 때문에 무거운 데이터들은 일부라도 화면을 띄운 후에 가져온다
    componentDidMount() {
        console.log("3. 컴포넌트 마운트")
    }

    // 4. componenetDidUpdate
    //      : state나 porps의 값이 갱신되어, 화면이 다시 렌더링 된 직후 실행
    componentDidUpdate() {
        console.log("4. 컴포넌트가 업데이트(props state가 변경")
    }

    // 5.componenetWillUnmount
    //      : 컴포넌트가 제거되기 직전에 실행
    //      : 타이머, 이벤트 리스너, 네트워크 연결 종료 등 정리할 때 사용
    componentWillUnmount() {
        console.log("5. 컴포넌트가 언마운트(사라짐")
    }

    handleIncrement() {
        this.setState({
            num: this.state.num +1
        })
    }

    handleDecrement() {
        this.setState({
            num: this.state.num -1
        })
    }


  // 2. render함수 : 화면을 구성하는 요소 (화면 렌더링)  
  render() {
    console.log("2. render")

    return (
      <div>
        <h1>Counter {this.state.num}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
   }
}


export default ClassComponent