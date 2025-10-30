import React from 'react'
import ColorResult from '../components/ColorResult'
import ColorList from '../components/ColorList'
import ColorProvider from '../provider/ColorProvider'

const Ex14 = () => {

    /*
        Context API란? :React에서 Component간에 데이터를 전역적으로 공유할 수 있는 기능(로그인기능,다크모드 자주사용)
        Q. props로만 데이터를 전달했을 때 발생하는 문제
        A. 깊숙히 위치한 컴포넌트로 데이터를 전달해야할 때,
            - 여러 컴포넌트를 통해서 props로 데이터를 전달(복잡하고 길어짐)
            - 실수가 발생될 확률이 매우 높아짐
            - 이러한 현상을 props drilling이라고 부른다!

        * 그렇기 때문에 전역적으로 데이터를 보관해줄 Context가 필요!  

        [만드는 순서]
        1. context 파일을 생성
            - createContext 함수 사용
            - export 해준다 ! (필수)

        2. context를 전역적으로 사용할 수 있도록 해주는 컴포넌트를 만든다!(Provider 컴포넌트)

        3. Provider component를 이용해서 context를 사용하고자 하는 컴포넌트를 전부 감싼다
            -> 사실상 데이터를 관리해주는 것은 Provider 컴포넌트!(state, 함수 등)

        4. 데이터를 사용할 때, 저장할 때
            -> 데이터를 사용하거나 저장할 컴포넌트에서 useContext함수를 통해 데이터를 가져온다!
            -> const {사용할 데이터, 저장 함수} = useContext(Context);

    */

  return (
    <div>
        <ColorProvider>
            <ColorList/>
            <hr />
            <ColorResult />
        </ColorProvider>
    </div>
  )
}

export default Ex14