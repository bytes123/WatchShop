import React from 'react'
import uberLogoBlack from '../Assets/Images/uberLogoBlack.svg'
import { Link } from 'react-router-dom'
import './UberEatsLogo.css'

export default function UberEatsLogo({ alt, classLogo, color }) {
  let logo = uberLogoBlack
  const uberLogoWhite =
    'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c266ad32e5e88af804b3a1b6b60098f9.svg'

  if (color === 'White') {
    logo = uberLogoWhite
  }

  return (
    <div className='uber__logo'>
      <Link to='/'>
        <img src={logo} alt={alt} className={`uber__logo-img ${classLogo}`} />
      </Link>
    </div>
  )
}
