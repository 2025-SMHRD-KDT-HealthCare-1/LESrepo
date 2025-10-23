import React from 'react'
import './Member.css'

const Member = ({prog, name}) => {
  return (
    <div>
        <div className='member'>{prog} {name}</div>
    </div>
  )
}

export default Member