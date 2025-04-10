import React from 'react'

const HighlightText = ({ text }) => {
  return (
    <span className='font-bold text-yellow gradient_color'>
      {" "}
      {text}
    </span>
  )
}

export default HighlightText
