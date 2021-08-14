import React, { useState, useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import { FaClock, FaAngleDown } from 'react-icons/fa'
import { GrFormSchedule } from 'react-icons/gr'
import AddressSeeking from './AddressSeeking'
import Button from './Button'
import './HeroSection.css'

function HeroSection({ list }) {
  const [random, setRandom] = useState(0)

  const { bgrColor, imgLeft, imgRight, title } = list[random]

  const handleRandom = () => {
    const newId = Math.floor(Math.random() * list.length)
    setRandom(newId)
  }

  useEffect(() => {
    handleRandom()
  }, [])

  return (
    <section className='content__looking'>
      <div className='row gx-0 content__banner'>
        <div
          className=' content__banner content__banner-left col-xl-5 col-12'
          style={{ backgroundColor: bgrColor }}
        >
          <img src={imgLeft} alt={title} />
        </div>
        <div
          className='content__banner content__banner-center col-xl-2  '
          style={{ backgroundColor: bgrColor }}
        ></div>
        <div
          className='content__banner content__banner-right col-xl-5'
          style={{ backgroundColor: bgrColor }}
        >
          <img src={imgRight} alt={title} />
        </div>{' '}
      </div>
      <div className='content__delivery container-custom'>
        <h1>Hungry? You're in the right place</h1>
        <form className='delivery__form'>
          <AddressSeeking
            addressClass='delivery__location'
            content='Enter delivery address'
          />
          <div className='delivery__time'>
            <div className='delivery__now-wrapper'>
              <FaClock className='time-icon' />
              <span className='delivery__time-label'>Deliver now</span>
            </div>
            <FaAngleDown className='down-icon' />
            <div className='delivery__time-sub'>
              <div className='deliver__sub deliver__sub-now'>
                <FaClock className='time-icon' />
                <span className='delivery__time-label'>Deliver now</span>
              </div>
              <div className='deliver__sub deliver__sub-schedule'>
                <GrFormSchedule className='schedule-icon' />
                <span className='delivery__time-label'>Schedule for later</span>
              </div>
            </div>
          </div>
          <Button
            text='Find Food'
            btnSize='btn-large'
            btnClass='delivery__button'
          />
        </form>
        <p className='delivery__sign-in'>
          <Link to='/sign-up'>Sign in</Link>
          <span> </span>for your recent addresses
        </p>
      </div>
    </section>
  )
}

export default HeroSection
