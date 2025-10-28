import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Join from './component/Join'
import Login from './component/Login'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path = '/' element={<Home></Home>}></Route>
        <Route path = '/join' element={<Join></Join>}></Route>
        <Route path = '/login' element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}

export default App