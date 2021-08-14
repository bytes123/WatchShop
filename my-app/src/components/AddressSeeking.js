import React, { useState, useRef } from 'react'
import './AddressSeeking.css'
import { HiLocationMarker } from 'react-icons/hi'

function AddressSeeking({ addressClass, content, display }) {
  const [isBorder, setIsBorder] = useState(false)
  const inputRef = useRef(null)

  const handleBorders = (e) => {
    setIsBorder(true)
  }

  document.addEventListener('click', (e) => {
    if (e.target !== inputRef.current) {
      setIsBorder(false)
    }
  })

  return (
    <div className={`location__input-wrapper ${addressClass}`}>
      <div
        className='border-up'
        style={
          isBorder
            ? { transform: 'translateY(0)', transition: 'transform 0.5s' }
            : {
                transform: 'translateY(100%)',
                transition: 'transform 0.5s',
              }
        }
      ></div>
      <div className='location__input-main'>
        <HiLocationMarker className='location__icon' />
        <input
          ref={inputRef}
          type='text'
          className='location__input'
          placeholder={content}
          onFocus={handleBorders}
        />
      </div>
    </div>
  )
}

export default AddressSeeking
