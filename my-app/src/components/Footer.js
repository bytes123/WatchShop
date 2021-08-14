import React from 'react'
import AppDowload from './AppDowlnoad'
import './footer.css'
import { Link } from 'react-router-dom'
import UberEatsLogo from './UberEatsLogo'
import { footerLink, footerLogo, footerHeadList } from './pages/Data'

function Footer() {
  return (
    <footer className='footer container-custom'>
      <div className='footer__head row gx-0'>
        <div className='footer__introduction col-6'>
          <UberEatsLogo color='White' />
          <AppDowload />
        </div>
        {footerLink.map((item) => {
          return (
            <div className='footer__linking col-3' key={item.id}>
              <h4 className='footer__header'>
                <Link to={`./${item.id}`} className='footer__header-link'>
                  {item.linkInfo}
                </Link>
              </h4>
              <ul className='footer__list'>
                {item.itemLink.map((link) => {
                  return (
                    <li className='footer__item' key={link.id}>
                      {link.logo ? (
                        <Link to={`./${link.id}`} className='footer__item-link'>
                          {link.logoSource}
                          <span>{link.linking}</span>
                        </Link>
                      ) : (
                        <Link to={`./${link.id}`} className='footer__item-link'>
                          {link.linking}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className='footer__footer'>
        <div className='footer__footer-heading'>
          <div className='footer__logo-wrapper'>
            {footerLogo.map((item) => {
              return (
                <Link
                  to={`./${item.name}`}
                  key={item.name}
                  className='footer__logo-link'
                >
                  {item.logo}
                </Link>
              )
            })}
          </div>
          <ul className='footer__policy-list'>
            {footerHeadList.map((item) => {
              return (
                <li className='footer__policy-item' key={item.name}>
                  <Link to={`./${item.name}`} className='footer__policy-link'>
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='footer__heading-privacy'>
          <div className='footer__heading-text'>
            <span className='footer__heading-nolink'>
              This site is protected by reCAPTCHA and the Google{' '}
            </span>
            <Link to='./privacy' className='footer__heading-link'>
              Privacy Policy{' '}
            </Link>
            <span className='footer__heading-nolink'>and </span>
            <Link to='./privacy' className='footer__heading-link'>
              Terms of Service{' '}
            </Link>
            <span className='footer__heading-nolink'>apply.</span>
          </div>
          <span className='footer__author'>© 2021 Uber Technologies Inc.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
