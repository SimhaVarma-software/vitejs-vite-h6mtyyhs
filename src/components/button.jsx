// write button card here// write button card here
import React from 'react'
import './button.css';

const Button = ({label}) => {
  return (
    <div>
    <button className='view-btn'>
       {label}
        </button>
        </div>
  )
}
export default Button