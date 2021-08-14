import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const SIZES = ['btn-small', 'btn-medium', 'btn-large']

function Button({ text, btnSize, btnClass, iconBtn, onClick, link, disabled }) {
  const checkButtonSize = SIZES.includes(btnSize) ? btnSize : SIZES[0]

  return link ? (
    <Link to={link} className='btn-link'>
      <button
        className={`btn ${checkButtonSize} ${btnClass ? btnClass : ''}`}
        onClick={onClick}
        disabled={disabled}
      >
        {iconBtn}
        <span> {text}</span>
      </button>
    </Link>
  ) : (
    <button
      className={`btn ${checkButtonSize} ${btnClass ? btnClass : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconBtn}
      <span>{text}</span>
    </button>
  )
}

export default Button
