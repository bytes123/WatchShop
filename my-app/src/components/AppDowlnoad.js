import React from 'react'
import { Link } from 'react-router-dom'
import './Appdownload.css'

function AppDowload({ classAppDowload }) {
  return (
    <div className={`app__download `}>
      <Link to='./'>
        <img
          src='https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg'
          alt='appstore'
          className='appstore-img'
        />
      </Link>
      <Link to='./'>
        <img
          src='https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png'
          alt='chplay'
          className='chplay-img'
        />
      </Link>
    </div>
  )
}

export default AppDowload
