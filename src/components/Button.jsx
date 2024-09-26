import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <>
    <button className='btnn'data-bs-target={props.id} onClick={props.fn} >{props.name}</button>
    
    </>
  )
}

export default Button;
