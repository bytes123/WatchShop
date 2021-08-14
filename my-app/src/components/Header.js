import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Asidebar from './Asidebar'
import Button from './Button'
import AddressSeeking from './AddressSeeking'
import UberEatsLogo from './UberEatsLogo'
import './Header.css'

function Header() {
  const headerContainer = useRef()
  const [isAsidebarOpen, setIsAsiderbarOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const [displayAddressSeeking, setDisplayAddressSeeking] = useState(false)
  const viewTabletAndMobile = window.matchMedia('(max-width: 63.9375em)')
  const viewDesktop = window.matchMedia('(min-width: 64em)')

  const handleOpenAsidebar = () => {
    document.querySelector('body').style.overflowY =
      'hidden' /* -> Turn off scroll */
    setIsAsiderbarOpen(!isAsidebarOpen) /* Toggle asidebar */
  }

  const handleCloseAsidebar = (e) => {
    if (e.target.classList.contains('overlay')) {
      setIsAsiderbarOpen(false)
      document.querySelector('body').style.overflowY = 'auto'
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      if (window.pageYOffset === 0) {
        setIsScroll(false)
      } else {
        setIsScroll(true)
      }

      // Display address when scrollY matches
      if (window.pageYOffset > 378) {
        setDisplayAddressSeeking(true)
      } // UnDisplay address when scrollY matches
      else {
        setDisplayAddressSeeking(false)
      }
    })
  }, [])

  useEffect(() => {
    document.querySelector('body').style.overflowY = 'auto'
  }, [])

  return (
    <>
      <header className={`header ${isScroll ? 'bg-light' : 'bg-transparent'}`}>
        <div
          className={`header__container container-custom ${
            displayAddressSeeking && viewTabletAndMobile.matches
              ? 'invisible'
              : ''
          }`}
        >
          <div className='header__menu'>
            <FaBars
              onClick={
                !isAsidebarOpen ? handleOpenAsidebar : handleCloseAsidebar
              }
              className='header__menu-icon'
            />
          </div>
          <div className='header__logo'>
            <UberEatsLogo
              alt='header-logo'
              classLogo='header__logo-img'
              color='Black'
            />
          </div>
          <Button
            text='Sign in'
            btnSize='btn-medium'
            btnClass='header__btn-signin'
            link='/login'
          />
        </div>
        <AddressSeeking
          addressClass={`header__address-seek ${
            displayAddressSeeking ? 'up' : 'hide'
          }`}
          content='Enter delivery address'
        />
      </header>
      <Asidebar
        display={isAsidebarOpen}
        handleCloseAsidebar={
          isAsidebarOpen ? handleCloseAsidebar : handleOpenAsidebar
        }
      />
    </>
  )
}

export default Header
