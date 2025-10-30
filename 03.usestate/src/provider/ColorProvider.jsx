import React, { useState } from 'react'
import ColorContext from '../context/colorContext'

const ColorProvider = ({children}) => {
    const [color,setColor] = useState('red');
  return (
    <ColorContext.Provider value={{color, setColor}}>
        {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider