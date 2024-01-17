import React from 'react'

const TextError = (props) => {
  return (
    <div className='d-flex text-danger mb-2'>
        {props.children}
    </div>
  )
}

export default TextError